<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletBannerEditorScreen`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletBannerEditorScreen

**Namespace:** SandBox.GauntletUI.BannerEditor
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletBannerEditorScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs`

## 概述

`GauntletBannerEditorScreen` 位于 `SandBox.GauntletUI.BannerEditor`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.GauntletUI.BannerEditor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnDone
`public void OnDone()`

**用途 / Purpose:** 当 `done` 事件触发时调用此方法。

### OnCancel
`public void OnCancel()`

**用途 / Purpose:** 当 `cancel` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new GauntletBannerEditorScreen();
value.OnDone();
```

## 参见

- [完整类目录](../catalog)