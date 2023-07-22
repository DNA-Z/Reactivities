
export interface Nds {
    id: string
    date: string
    counterAgentId: number,
    counterAgentName: string,
    category: string,
    dealsNumber: string | number;
    account: string,
    ndsRefund: number,
    ndsPayable: number,
    description: string,
    countryId: number,
    countryName: string,
    currencyId: number,
    currencyName: string
}