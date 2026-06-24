<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuOverlay`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuOverlay

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuOverlay : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay/GameMenuOverlay.cs`

## 概述

`GameMenuOverlay` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsContextMenuEnabled` | `public bool IsContextMenuEnabled { get; set; }` |
| `IsInitializationOver` | `public bool IsInitializationOver { get; set; }` |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |
| `ContextList` | `public MBBindingList<StringItemWithEnabledAndHintVM> ContextList { get; set; }` |
| `CurrentOverlayType` | `public int CurrentOverlayType { get; set; }` |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteOnOverlayClosed
`public virtual void ExecuteOnOverlayClosed()`

**用途 / Purpose:** 执行 `on overlay closed` 操作或流程。

### ExecuteOnOverlayOpened
`public virtual void ExecuteOnOverlayOpened()`

**用途 / Purpose:** 执行 `on overlay opened` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Refresh
`public virtual void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### UpdateOverlayType
`public virtual void UpdateOverlayType(TaleWorlds.CampaignSystem.GameMenus.GameMenu.MenuOverlayType newType)`

**用途 / Purpose:** 更新 `overlay type` 的状态或数据。

### OnFrameTick
`public virtual void OnFrameTick(float dt)`

**用途 / Purpose:** 当 `frame tick` 事件触发时调用此方法。

### HourlyTick
`public void HourlyTick()`

**用途 / Purpose:** 处理 `hourly tick` 相关逻辑。

### SetExitInputKey
`public void SetExitInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `exit input key` 的值或状态。

## 使用示例

```csharp
var value = new GameMenuOverlay();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)