import Tab from "./Tab";

const Pagination = ({
    totalPages,
    prevBtnClick,
    nextBtnClick,
    tabBtnClick,
    pageNumber,
}) => {
    const paginationTabs = [...Array(totalPages).keys()];
    return (
        <div className="text-center">
            <Tab disable={pageNumber === 0} currPage={-1} onclick={prevBtnClick}>
                ⬅️
            </Tab>
            {paginationTabs.map((tab, index) => {
                return (
                    <Tab
                        key={index}
                        onclick={() => tabBtnClick(tab)}
                        Number={tab}
                        currPage={pageNumber}
                    />
                );
            })}
            <Tab disable={pageNumber + 1 === totalPages} currPage={totalPages+10} onclick={nextBtnClick}>
                ➡️
            </Tab>
        </div>
    );
};

export default Pagination;
