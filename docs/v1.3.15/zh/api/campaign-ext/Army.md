<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Army`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Army

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** public class Army : ITrackableCampaignObject, ITrackableBase
**Base:** `ITrackableCampaignObject`
**File:** `TaleWorlds.CampaignSystem/Army.cs`

## 概述

`Army` 表示由一个领主（`ArmyOwner`，`Hero`）为某个 `Kingdom` 召集的 `MobileParty` 联军，用于执行大规模军事目标（攻城、远征、防御集结）。是战役层面的协同作战机制。

modder 需关注：
- **凝聚力 Cohesion**：联军每天流失凝聚力（`DailyCohesionChange`，由 `ArmyManagementCalculationModel` 计算）；低于 `CohesionThresholdForDispersion` 即解散。用 `BoostCohesionWithInfluence` 续命。
- **集结 Gathering**：`Gather(...)` 召集队伍；`IsArmyInGatheringState` / `IsWaitingForArmyMembers` 判断是否就绪。
- **兵力 Strength**：`CalculateCurrentStrength()` 汇总成员队伍兵力。
- **生命周期**：为目标创建，由 `FinishArmyObjective()` 或 `DisbandArmyAction` 解散。

## 主要属性

| Name | Signature |
|------|-----------|
| `GatheringPositionMaxDistanceToTheSettlement` | `public float GatheringPositionMaxDistanceToTheSettlement { get { return Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(this.LeaderParty.NavigationCapability) * 0.2f; }` |
| `GatheringPositionMinDistanceToTheSettlement` | `public float GatheringPositionMinDistanceToTheSettlement { get { return Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(this.LeaderParty.NavigationCapability) * 0.1f; }` |
| `Parties` | `public MBReadOnlyList<MobileParty> Parties { get { return this._parties; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get { return this.ArmyOwner.EncyclopediaLinkWithName; }` |
| `ArmyType` | `public Army.ArmyTypes ArmyType { get; set; }` |
| `ArmyOwner` | `public Hero ArmyOwner { get; set; }` |
| `Cohesion` | `public float Cohesion { get; set; }` |
| `DailyCohesionChange` | `public float DailyCohesionChange { get { return Campaign.Current.Models.ArmyManagementCalculationModel.CalculateDailyCohesionChange(this, false).ResultNumber; }` |
| `DailyCohesionChangeExplanation` | `public ExplainedNumber DailyCohesionChangeExplanation { get { return Campaign.Current.Models.ArmyManagementCalculationModel.CalculateDailyCohesionChange(this, true); }` |
| `CohesionThresholdForDispersion` | `public int CohesionThresholdForDispersion { get { return Campaign.Current.Models.ArmyManagementCalculationModel.CohesionThresholdForDispersion; }` |
| `LeaderPartyAndAttachedPartiesCount` | `public int LeaderPartyAndAttachedPartiesCount { get { return this.LeaderParty.AttachedParties.Count + 1; }` |
| `Kingdom` | `public Kingdom Kingdom { get { return this._kingdom; }` |
| `AiBehaviorObject` | `public IMapPoint AiBehaviorObject { get { return this._aiBehaviorObject; }` |
| `IsReady` | `public bool IsReady { get { return true; }` |
| `IsArmyInGatheringState` | `public bool IsArmyInGatheringState { get { return this.LeaderParty.AttachedParties.Count + 1 < this._parties.Count; }` |

## 主要方法

### ToString
```csharp
public override string ToString()
```

### CalculateCurrentStrength
```csharp
public float CalculateCurrentStrength()
```

### GetCustomStrength
```csharp
public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)
```

### UpdateName
```csharp
public void UpdateName()
```

### DoesLeaderPartyAndAttachedPartiesContain
```csharp
public bool DoesLeaderPartyAndAttachedPartiesContain(MobileParty party)
```

### BoostCohesionWithInfluence
```csharp
public void BoostCohesionWithInfluence(float cohesionToGain, int cost)
```

### RecalculateArmyMorale
```csharp
public void RecalculateArmyMorale()
```

### GetNotificationText
```csharp
public TextObject GetNotificationText()
```

### GetLongTermBehaviorText
```csharp
public TextObject GetLongTermBehaviorText(bool setWithLink = false)
```

### Gather
```csharp
public void Gather(Settlement initialHostileSettlement, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)
```

### IsWaitingForArmyMembers
```csharp
public bool IsWaitingForArmyMembers()
```

### FinishArmyObjective
```csharp
public void FinishArmyObjective()
```

### GetRelativePositionForParty
```csharp
public Vec2 GetRelativePositionForParty(MobileParty mobileParty, Vec2 armyFacing)
```

### AddPartyToMergedParties
```csharp
public void AddPartyToMergedParties(MobileParty mobileParty)
```

### SetPositionAfterMapChange
```csharp
public void SetPositionAfterMapChange(CampaignVec2 newPosition)
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
```csharp
public void CheckPositionsForMapChangeAndUpdateIfNeeded()
```

## 使用示例

```csharp
// 遍历所有王国的联军，报告兵力/凝聚力，防止重要联军解散
foreach (Army army in Kingdom.All.SelectMany(k => k.Armies))
{
    if (army.IsArmyInGatheringState) continue;
    float strength = army.CalculateCurrentStrength();
    InformationManager.DisplayMessage(new InformationMessage(
        $"{army.Name}（统帅 {army.ArmyOwner.Name}）— 兵力 {strength:F0}，凝聚力 {army.Cohesion:F1}"));

    if (army.Cohesion < army.CohesionThresholdForDispersion + 5f)
        army.BoostCohesionWithInfluence(cohesionToGain: 20f, cost: 0);
}
```

## 参见

- [完整类目录](../catalog)