<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UIResourceManager`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UIResourceManager

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public static class UIResourceManager`
**Base:** 无
**File:** `TaleWorlds.Engine.GauntletUI/UIResourceManager.cs`

## 概述

`UIResourceManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `UIResourceManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ResourceDepot` | `public static ResourceDepot ResourceDepot { get; }` |
| `WidgetFactory` | `public static WidgetFactory WidgetFactory { get; }` |
| `SpriteData` | `public static SpriteData SpriteData { get; }` |
| `BrushFactory` | `public static BrushFactory BrushFactory { get; }` |
| `FontFactory` | `public static FontFactory FontFactory { get; }` |
| `ResourceContext` | `public static TwoDimensionEngineResourceContext ResourceContext { get; }` |

## 主要方法

### Refresh
`public static void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### GetSpriteCategory
`public static SpriteCategory GetSpriteCategory(string spriteCategoryName)`

**用途 / Purpose:** 获取 `sprite category` 的当前值。

### LoadSpriteCategory
`public static SpriteCategory LoadSpriteCategory(string spriteCategoryName)`

**用途 / Purpose:** 加载 `sprite category` 数据。

### Update
`public static void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### OnLanguageChange
`public static void OnLanguageChange(string newLanguageCode)`

**用途 / Purpose:** 当 `language change` 事件触发时调用此方法。

### Clear
`public static void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

## 使用示例

```csharp
var manager = UIResourceManager.Current;
```

## 参见

- [完整类目录](../catalog)