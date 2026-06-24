<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OptionsGamepadOptionItemListPanel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OptionsGamepadOptionItemListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsGamepadOptionItemListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad/OptionsGamepadOptionItemListPanel.cs`

## 概述

`OptionsGamepadOptionItemListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TargetKey` | `public OptionsGamepadKeyLocationWidget TargetKey { get; }` |
| `ActionText` | `public string ActionText { get; set; }` |
| `KeyId` | `public int KeyId { get; set; }` |

## 主要方法

### OnActionTextChangeEvent
`public delegate void OnActionTextChangeEvent()`

**用途 / Purpose:** 当 `action text change event` 事件触发时调用此方法。

### SetKeyProperties
`public void SetKeyProperties(OptionsGamepadKeyLocationWidget currentTarget, Widget parentAreaWidget)`

**用途 / Purpose:** 设置 `key properties` 的值或状态。

## 使用示例

```csharp
var value = new OptionsGamepadOptionItemListPanel();
value.OnActionTextChangeEvent();
```

## 参见

- [完整类目录](../catalog)