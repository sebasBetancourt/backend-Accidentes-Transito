export interface Evidence {
    id: string;
    caseId: string;
    description: string;
    type: 'photo' | 'video' | 'document' | 'other';
    filePath: string;
    dateCollected: Date;
    collectedBy: string;
}
    
export interface EvidenceCreateDTO{
    caseId: string;
    description: string;
    type: 'photo' | 'video' | 'document' | 'other';
    filePath: string;
    dateCollected: Date;
    collectedBy: string;
}
    
export interface EvidenceUpdateDTO{
    description?: string;
    type?: 'photo' | 'video' | 'document' | 'other';
    filePath?: string;
    dateCollected?: Date;
    collectedBy?: string;
}

export interface EvidenceFilterDTO{
    caseId?: string;
    type?: 'photo' | 'video' | 'document' | 'other';
    collectedBy?: string;
}   
export interface EvidenceLinkDTO {
    evidenceId: string;
    linkedEntityId: string;
    linkedEntityType: 'case' | 'investigation' | 'report';
}   
export interface EvidenceMetadataDTO {
    evidenceId: string;
    key: string;
    value: string;
}
export interface EvidenceChainOfCustodyDTO {
    evidenceId: string;
    transferredTo: string;
    transferDate: Date;
    reason: string;
}
export interface EvidenceTagDTO {
    evidenceId: string;
    tag: string;
}
export interface EvidenceAnalysisDTO {
    evidenceId: string;
    analysisDate: Date;
    analyst: string;
    findings: string;
}
export interface EvidenceStorageDTO {
    evidenceId: string;
    storageLocation: string;
    shelfNumber: string;
    boxNumber: string;
}
export interface EvidenceDispositionDTO {
    evidenceId: string;
    dispositionDate: Date;
    method: 'returned' | 'destroyed' | 'archived';
    authorizedBy: string;
}
export interface EvidenceReviewDTO {
    evidenceId: string;
    reviewDate: Date;
    reviewer: string;
    comments: string;
}
export interface EvidenceAuditDTO {
    evidenceId: string;
    auditDate: Date;
    auditor: string;
    findings: string;
}
export interface EvidencePhotoDTO {
    evidenceId: string;
    photoPath: string;
    caption?: string;
}