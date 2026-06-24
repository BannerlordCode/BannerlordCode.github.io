<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EscapeMenuVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EscapeMenuVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EscapeMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuVM.cs`

## 概述

`EscapeMenuVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `MenuItems` | `public MBBindingList<EscapeMenuItemVM> MenuItems { get; set; }` |
| `Tips` | `public GameTipsVM Tips { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Tick
`public virtual void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### RefreshItems
`public void RefreshItems(IEnumerable<EscapeMenuItemVM> items)`

**用途 / Purpose:** 刷新 `items` 的显示或缓存。

## 使用示例

```csharp
var value = new EscapeMenuVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)