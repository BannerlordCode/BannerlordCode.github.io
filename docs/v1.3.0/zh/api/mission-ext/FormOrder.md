<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormOrder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FormOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormOrder`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/FormOrder.cs`

## 概述

`FormOrder` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CustomFlankWidth` | `public float CustomFlankWidth { get; set; }` |
| `OrderType` | `public OrderType OrderType { get; }` |

## 主要方法

### FormOrderCustom
`public static FormOrder FormOrderCustom(float customWidth)`

**用途 / Purpose:** 处理 `form order custom` 相关逻辑。

### OnApply
`public void OnApply(Formation formation)`

**用途 / Purpose:** 当 `apply` 事件触发时调用此方法。

### GetUnitCountOf
`public static int GetUnitCountOf(Formation formation)`

**用途 / Purpose:** 获取 `unit count of` 的当前值。

### OnApplyToCustomArrangement
`public bool OnApplyToCustomArrangement(Formation formation, IFormationArrangement arrangement)`

**用途 / Purpose:** 当 `apply to custom arrangement` 事件触发时调用此方法。

### GetMaxFileCountStatic
`public static int? GetMaxFileCountStatic(FormOrder.FormOrderEnum order, int unitCount)`

**用途 / Purpose:** 获取 `max file count static` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
FormOrder.FormOrderCustom(0);
```

## 参见

- [完整类目录](../catalog)