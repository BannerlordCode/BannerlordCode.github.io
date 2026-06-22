<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestHelper

**命名空间:** Helpers
**模块:** Helpers
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`QuestHelper` 是 `Helpers` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### AddMapArrowFromPointToTarget

```csharp
public static void AddMapArrowFromPointToTarget(TextObject name, CampaignVec2 sourcePosition, CampaignVec2 targetPosition, float life, float error)
```

### CheckGoldForAlternativeSolution

```csharp
public static bool CheckGoldForAlternativeSolution(int requiredGold, out TextObject explanation)
```

### GetAlternativeSolutionMeleeSkills

```csharp
public static List<SkillObject> GetAlternativeSolutionMeleeSkills()
```

### CheckRosterForAlternativeSolution

```csharp
public static bool CheckRosterForAlternativeSolution(TroopRoster troopRoster, int requiredTroopCount, out TextObject explanation, int minimumTier = 0, bool mountedRequired = false)
```

### GetAlternativeSolutionRangedSkills

```csharp
public static List<SkillObject> GetAlternativeSolutionRangedSkills()
```

### CheckMinorMajorCoercion

```csharp
public static bool CheckMinorMajorCoercion(QuestBase questToCheck, MapEvent mapEvent, PartyBase attackerParty)
```

### ApplyGenericMinorMajorCoercionConsequences

```csharp
public static void ApplyGenericMinorMajorCoercionConsequences(QuestBase quest, MapEvent mapEvent)
```

### GetAveragePriceOfItemInTheWorld

```csharp
public static int GetAveragePriceOfItemInTheWorld(ItemObject item)
```

### CheckWarDeclarationAndFailOrCancelTheQuest

```csharp
public static void CheckWarDeclarationAndFailOrCancelTheQuest(QuestBase questToCheck, IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail detail, TextObject failLog, TextObject cancelLog, bool forceCancel = false)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)