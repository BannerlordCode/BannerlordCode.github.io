<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyThinkParams`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyThinkParams

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PartyThinkParams` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `AIBehaviorScores` | `public MBReadOnlyList<ValueTuple<AIBehaviorData, float>> AIBehaviorScores { get; }` |
| `PossibleArmyMembersUponArmyCreation` | `public MBReadOnlyList<MobileParty> PossibleArmyMembersUponArmyCreation { get; }` |


## 主要方法

### Reset

```csharp
public void Reset(MobileParty mobileParty)
```

### Initialization

```csharp
public void Initialization()
```

### AddPotentialArmyMember

```csharp
public void AddPotentialArmyMember(MobileParty armyMember)
```

### TryGetBehaviorScore

```csharp
public bool TryGetBehaviorScore(in AIBehaviorData aiBehaviorData, out float score)
```

### SetBehaviorScore

```csharp
public void SetBehaviorScore(in AIBehaviorData aiBehaviorData, float score)
```

### AddBehaviorScore

```csharp
public void AddBehaviorScore(in ValueTuple<AIBehaviorData, float> value)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)