<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GeneratedGauntletMovie`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GeneratedGauntletMovie

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GeneratedGauntletMovie : IGauntletMovie`
**Base:** `IGauntletMovie`
**File:** `TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs`

## 概述

`GeneratedGauntletMovie` 位于 `TaleWorlds.GauntletUI.Data`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Data` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Context` | `public UIContext Context { get; }` |
| `RootWidget` | `public Widget RootWidget { get; }` |
| `MovieName` | `public string MovieName { get; }` |
| `IsLoaded` | `public bool IsLoaded { get; }` |
| `IsReleased` | `public bool IsReleased { get; }` |

## 主要方法

### Update
`public void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### Release
`public void Release()`

**用途 / Purpose:** 处理 `release` 相关逻辑。

### RefreshBindingWithChildren
`public void RefreshBindingWithChildren()`

**用途 / Purpose:** 刷新 `binding with children` 的显示或缓存。

### OnResourcesRefreshed
`public void OnResourcesRefreshed(SpriteData spriteData, WidgetFactory widgetFactory, BrushFactory brushFactory, FontFactory fontFactory)`

**用途 / Purpose:** 当 `resources refreshed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new GeneratedGauntletMovie();
value.Update();
```

## 参见

- [完整类目录](../catalog)