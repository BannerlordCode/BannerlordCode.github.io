<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Barterable`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Barterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class Barterable`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem.Barterables/Barterable.cs`

## 概述

`Barterable` 位于 `TaleWorlds.CampaignSystem.BarterSystem.Barterables`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.BarterSystem.Barterables` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StringID` | `public abstract string StringID { get; }` |
| `OriginalOwner` | `public Hero OriginalOwner { get; }` |
| `OriginalParty` | `public PartyBase OriginalParty { get; }` |
| `Name` | `public abstract TextObject Name { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |
| `IsContextDependent` | `public bool IsContextDependent { get; set; }` |
| `Group` | `public BarterGroup Group { get; set; }` |
| `Side` | `public BarterSide Side { get; }` |

## 主要方法

### GetValueForFaction
`public int GetValueForFaction(IFaction faction)`

**用途 / Purpose:** 获取 `value for faction` 的当前值。

### CheckBarterLink
`public virtual void CheckBarterLink(Barterable linkedBarterable)`

**用途 / Purpose:** 处理 `check barter link` 相关逻辑。

### GetUnitValueForFaction
`public abstract int GetUnitValueForFaction(IFaction faction)`

**用途 / Purpose:** 获取 `unit value for faction` 的当前值。

### SetIsOffered
`public void SetIsOffered(bool value)`

**用途 / Purpose:** 设置 `is offered` 的值或状态。

### AddBarterLink
`public void AddBarterLink(Barterable barterable)`

**用途 / Purpose:** 向当前集合/状态中添加 `barter link`。

### Initialize
`public void Initialize(BarterGroup barterGroup, bool isContextDependent)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### IsCompatible
`public virtual bool IsCompatible(Barterable barterable)`

**用途 / Purpose:** 处理 `is compatible` 相关逻辑。

### GetVisualIdentifier
`public abstract ImageIdentifier GetVisualIdentifier()`

**用途 / Purpose:** 获取 `visual identifier` 的当前值。

### GetEncyclopediaLink
`public virtual string GetEncyclopediaLink()`

**用途 / Purpose:** 获取 `encyclopedia link` 的当前值。

### Apply
`public abstract void Apply()`

**用途 / Purpose:** 将 `apply` 应用到当前对象。

## 使用示例

```csharp
var implementation = new CustomBarterable();
```

## 参见

- [完整类目录](../catalog)