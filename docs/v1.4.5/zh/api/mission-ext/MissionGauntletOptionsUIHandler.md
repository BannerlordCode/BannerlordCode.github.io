<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGauntletOptionsUIHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletOptionsUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletOptionsUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission/MissionGauntletOptionsUIHandler.cs`

## 概述

`MissionGauntletOptionsUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionGauntletOptionsUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; }` |

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 `mission screen initialize` 事件触发时调用此方法。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### OnEscape
`public override bool OnEscape()`

**用途 / Purpose:** 当 `escape` 事件触发时调用此方法。

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**用途 / Purpose:** 处理 `is opening escape menu on focus change allowed` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionGauntletOptionsUIHandler());
```

## 参见

- [完整类目录](../catalog)