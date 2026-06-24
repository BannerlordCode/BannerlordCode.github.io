<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GamepadNavigationForcedScopeCollection`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GamepadNavigationForcedScopeCollection

**Namespace:** TaleWorlds.GauntletUI.GamepadNavigation
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GamepadNavigationForcedScopeCollection`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.GamepadNavigation/GamepadNavigationForcedScopeCollection.cs`

## 概述

`GamepadNavigationForcedScopeCollection` 位于 `TaleWorlds.GauntletUI.GamepadNavigation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.GamepadNavigation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `CollectionID` | `public string CollectionID { get; set; }` |
| `CollectionOrder` | `public int CollectionOrder { get; set; }` |
| `ParentWidget` | `public Widget ParentWidget { get; set; }` |
| `Scopes` | `public List<GamepadNavigationScope> Scopes { get; }` |
| `ActiveScope` | `public GamepadNavigationScope ActiveScope { get; set; }` |
| `PreviousScope` | `public GamepadNavigationScope PreviousScope { get; set; }` |

## 主要方法

### IsAvailable
`public bool IsAvailable()`

**用途 / Purpose:** 处理 `is available` 相关逻辑。

### AddScope
`public void AddScope(GamepadNavigationScope scope)`

**用途 / Purpose:** 向当前集合/状态中添加 `scope`。

### RemoveScope
`public void RemoveScope(GamepadNavigationScope scope)`

**用途 / Purpose:** 从当前集合/状态中移除 `scope`。

### ClearScopes
`public void ClearScopes()`

**用途 / Purpose:** 处理 `clear scopes` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new GamepadNavigationForcedScopeCollection();
value.IsAvailable();
```

## 参见

- [完整类目录](../catalog)