<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SkillEffect`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillEffect

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SkillEffect` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<SkillEffect> All { get; }` |
| `Role` | `public PartyRole Role { get; }` |
| `IncrementType` | `public EffectIncrementType IncrementType { get; }` |
| `EffectedSkill` | `public SkillObject EffectedSkill { get; }` |


## 主要方法

### Initialize

```csharp
public void Initialize(TextObject description, SkillObject effectedSkill, PartyRole role, float bonus, EffectIncrementType incrementType, float baseValue = 0f, float limitMin = -3.4028235E+38f, float limitMax = 3.4028235E+38f)
```

### GetSkillEffectValue

```csharp
public float GetSkillEffectValue(int skillLevel)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)