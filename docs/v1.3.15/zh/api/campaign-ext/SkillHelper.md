<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SkillHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillHelper

**命名空间:** Helpers
**模块:** Helpers
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SkillHelper` 是 `Helpers` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### AddSkillBonusForSkillLevel

```csharp
public static void AddSkillBonusForSkillLevel(SkillEffect skillEffect, ref ExplainedNumber explainedNumber, int skillLevel)
```

### AddSkillBonusForParty

```csharp
public static void AddSkillBonusForParty(SkillEffect skillEffect, MobileParty party, ref ExplainedNumber explainedNumber)
```

### AddSkillBonusForTown

```csharp
public static void AddSkillBonusForTown(SkillEffect skillEffect, Town town, ref ExplainedNumber explainedNumber)
```

### AddSkillBonusForCharacter

```csharp
public static void AddSkillBonusForCharacter(SkillEffect skillEffect, CharacterObject character, ref ExplainedNumber explainedNumber)
```

### GetEffectDescriptionForSkillLevel

```csharp
public static TextObject GetEffectDescriptionForSkillLevel(SkillEffect effect, int level)
```

### GetEffectivePartyLeaderForSkill

```csharp
public static CharacterObject GetEffectivePartyLeaderForSkill(PartyBase party)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)