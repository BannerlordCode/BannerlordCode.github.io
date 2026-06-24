<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemCategory`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemCategory

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ItemCategory : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ItemCategory.cs`

## 概述

`ItemCategory` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTradeGood` | `public bool IsTradeGood { get; }` |
| `IsAnimal` | `public bool IsAnimal { get; }` |
| `CanSubstitute` | `public ItemCategory CanSubstitute { get; }` |
| `SubstitutionFactor` | `public float SubstitutionFactor { get; }` |
| `Properties` | `public ItemCategory.Property Properties { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `BaseDemand` | `public float BaseDemand { get; }` |
| `LuxuryDemand` | `public float LuxuryDemand { get; }` |

## 主要方法

### InitializeObject
`public ItemCategory InitializeObject(bool isTradeGood = false, int baseDemand = 0, int luxuryDemand = 0, ItemCategory.Property properties = ItemCategory.Property.None, ItemCategory canSubstitute = null, float substitutionFactor = 0f, bool isAnimal = false, bool isValid = true)`

**用途 / Purpose:** 初始化 `object` 的状态、资源或绑定。

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new ItemCategory();
value.InitializeObject(false, 0, 0, itemCategory.Property.None, null, 0, false, false);
```

## 参见

- [完整类目录](../catalog)