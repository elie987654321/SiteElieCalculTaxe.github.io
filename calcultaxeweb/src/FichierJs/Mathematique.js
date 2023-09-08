class Mathematique
{
    static calculTPS(montant, annee)
    {
        if(annee > 1991 && annee < 2006)
        {
            return montant * 0.07;
        }    
        else if(annee >= 2006 && annee <= 2007)
        {
            return montant * 0.06;
        }
        else if(annee > 2007)
        {
            return montant * 0.05;
        }
    }

    static calculTVQ(montant, annee)
    {
        if(annee <= 1994)
        {
            return alert("veuillez choisir une date apres 1994")
        }
        else if(annee <= 1997)
        {
            return montant * 0.065
        }
        else if(annee <= 2010)
        {
            return montant * 7.5
        }
        else if(annee == 2011)
        {
            return montant * 8.5
        }
        else if(annee == 2012)
        {
            return montant * 9.5
        }
        else if(annee >= 2013)
        {
            return montant * 9.975 
        }
    }
}

export default Mathematique