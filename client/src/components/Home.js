import React, { useEffect, useState } from "react";
import { Table, Pagination, TextInput, createStyles } from "@mantine/core";
// import { IconSearch } from "@tabler/icons";
import FetchDataService from "../services/FetchDataService";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
    input: {
        lineHeight: 1,
        placeholder: "Search news",
        rightSectionWidth: 42,
        radius: theme.spacing.xs,
        size: theme.spacing.xl,
        paddingBottom: theme.spacing.sm,
        margin: theme.spacing.xl,
        borderBottom: `2px solid ${theme.colors.gray[2]}`,
    },
}));

export default function Home() {
    const { classes } = useStyles();
    const [gpsData, setGpsData] = useState([]);
    const [dataToDisplay, setDataToDisplay] = useState([]); //responsible to hold results of search bar
    const [searchTerm, setSearchTerm] = useState(""); //responsible to hold search term
    // pagination
    const [page, setPage] = useState(1);
    const [devicesPerPage] = useState(5);
    const indexOfLastDevice = page * devicesPerPage;
    const indexOfFirstDevice = indexOfLastDevice - devicesPerPage;
    const data = gpsData.slice(indexOfFirstDevice, indexOfLastDevice);
    const paginate = (pageNumber) => setPage(pageNumber);
    const total = 1 + gpsData.length / devicesPerPage;

    useEffect(() => {
        FetchDataService().then((data) => {
            setGpsData(data);
        });
    }, []);

    const handleSearchInput = () => {
        const filteredData = gpsData.filter((data) => {
            return data.DeviceType.includes(searchTerm);
        });
        setDataToDisplay(filteredData);
        console.log(filteredData);
    };

    const row = (searchTerm === "" ? data : dataToDisplay).map((data) => {
        return (
            <>
                <Link to={`/gps/${data.DeviceId}`}>
                    <tr key={data.id}>
                        <td>{data.DeviceId}</td>
                        <td> -- </td>
                        <td>{data.DeviceType}</td>
                        <td> -- </td>
                        <td>{data.Timing}</td>
                        <td> -- </td>
                        <td>{data.Location}</td>
                    </tr>
                    <br />
                </Link>
            </>
        );
    });

    return (
        <>
            <TextInput
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    onkeydown = (e) => {
                        if (e.key === "Enter") {
                            handleSearchInput(e);
                        }
                    };
                }}
                className={classes.input}
            />
            <Table>
                <tbody>{row}</tbody>
            </Table>

            {gpsData.length > 10 ? (
                <Pagination
                    total={total}
                    // limit={devicesPerPage}
                    onChange={paginate}
                    size="lg"
                    data-mantine-composable
                />
            ) : null}
        </>
    );
}
