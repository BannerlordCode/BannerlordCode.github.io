<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EffectInfo`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EffectInfo

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct EffectInfo`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Settlements/Buildings/BuildingType.cs`

## 概述

`EffectInfo` 位于 `TaleWorlds.CampaignSystem.Settlements.Buildings`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Buildings` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BuildingEffect` | `public BuildingEffectEnum BuildingEffect { get; }` |
| `BuildingEffectIncrementType` | `public BuildingEffectIncrementType BuildingEffectIncrementType { get; }` |
| `Level1Effect` | `public float Level1Effect { get; }` |
| `Level2Effect` | `public float Level2Effect { get; }` |
| `Level3Effect` | `public float Level3Effect { get; }` |

## 主要方法

### GetEffectValue
`public float GetEffectValue(int i)`

**用途 / Purpose:** 获取 `effect value` 的当前值。

## 使用示例

```csharp
var value = new EffectInfo();
value.GetEffectValue(0);
```

## 参见

- [完整类目录](../catalog)