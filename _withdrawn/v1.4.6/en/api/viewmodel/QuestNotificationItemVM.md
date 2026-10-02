---
title: "QuestNotificationItemVM"
description: "QuestNotificationItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes, inheriting MapNotificationItemBaseVM; 3 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/QuestNotificationItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# QuestNotificationItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestNotificationItemVM : MapNotificationItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/QuestNotificationItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

QuestNotificationItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/QuestNotificationItemVM.cs. It is a public class, implementing/inheriting MapNotificationItemBaseVM; the inheritance chain is QuestNotificationItemVM → MapNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 1 methods, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestNotificationItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`, inheritance chain QuestNotificationItemVM → MapNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 1/3, properties 0/3), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/QuestNotificationItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `QuestNotificationItemVM` | `public QuestNotificationItemVM(QuestBase quest, InformationData data, Action<QuestBase>onQuestNotificationInspect, Action<MapNotificationItemBaseVM>onRemove) : base(data)` | constructor |
| `QuestNotificationItemVM` | `public QuestNotificationItemVM(IssueBase issue, InformationData data, Action<IssueBase>onIssueNotificationInspect, Action<MapNotificationItemBaseVM>onRemove) : base(data)` | constructor |
| `ManualRefreshRelevantStatus` | `public override void ManualRefreshRelevantStatus()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MapNotificationItemBaseVM](../MapNotificationItemBaseVM/)
- [same namespace AcceptCallToWarOfferNotificationItemVM](../AcceptCallToWarOfferNotificationItemVM/)
- [same namespace AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM/)
- [same namespace AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM/)
- [same namespace AllianceOfferNotificationItemVM](../AllianceOfferNotificationItemVM/)
