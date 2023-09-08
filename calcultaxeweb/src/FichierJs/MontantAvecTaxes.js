import Mathematique from "./Mathematique";

class MontantAvecTaxes
{ 
    constructor(montant = 0,pAnnee)
    {
        this.annee = pAnnee;
        this.montantSansTaxes = montant;
        this.tps = Mathematique.calculTPS(montant, pAnnee);
        this.tvq = Mathematique.calculTVQ(montant, pAnnee);
        this.montantAvecTaxes = this.montantSansTaxes + this.tps + this.tvq;
    }
}

export default MontantAvecTaxes