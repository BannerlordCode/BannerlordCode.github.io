<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEngineType`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeEngineType

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class SiegeEngineType : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/SiegeEngineType.cs`

## 概述

`SiegeEngineType` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Difficulty` | `public int Difficulty { get; }` |
| `BaseHitPoints` | `public int BaseHitPoints { get; }` |
| `ToolCost` | `public int ToolCost { get; }` |
| `HitChance` | `public float HitChance { get; }` |
| `IsAntiPersonnel` | `public bool IsAntiPersonnel { get; }` |
| `AntiPersonnelHitChance` | `public float AntiPersonnelHitChance { get; }` |
| `IsConstructible` | `public bool IsConstructible { get; }` |
| `IsRanged` | `public bool IsRanged { get; }` |
| `Damage` | `public int Damage { get; }` |
| `ManDayCost` | `public int ManDayCost { get; }` |
| `CampaignRateOfFirePerDay` | `public float CampaignRateOfFirePerDay { get; }` |
| `MovementSpeed` | `public float MovementSpeed { get; }` |
| `ProjectileSpeed` | `public float ProjectileSpeed { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
var value = new SiegeEngineType();
value.ToString();
```

## 参见

- [完整类目录](../catalog)