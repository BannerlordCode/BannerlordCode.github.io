<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SkillEffect`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SkillEffect

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class SkillEffect : PropertyObject`
**Base:** `PropertyObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SkillEffect.cs`

## 概述

`SkillEffect` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Bonus` | `public float Bonus { get; }` |
| `BaseValue` | `public float BaseValue { get; }` |
| `LimitMin` | `public float LimitMin { get; }` |
| `LimitMax` | `public float LimitMax { get; }` |
| `Role` | `public PartyRole Role { get; }` |
| `IncrementType` | `public EffectIncrementType IncrementType { get; }` |
| `EffectedSkill` | `public SkillObject EffectedSkill { get; }` |

## 主要方法

### Initialize
`public void Initialize(TextObject description, SkillObject effectedSkill, PartyRole role, float bonus, EffectIncrementType incrementType, float baseValue = 0f, float limitMin = float.MinValue, float limitMax = float.MaxValue)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetSkillEffectValue
`public float GetSkillEffectValue(int skillLevel)`

**用途 / Purpose:** 获取 `skill effect value` 的当前值。

## 使用示例

```csharp
var value = new SkillEffect();
value.Initialize(description, effectedSkill, role, 0, incrementType, 0, 0, 0);
```

## 参见

- [完整类目录](../catalog)