---
title: "DefaultAdminPanelOptionProvider"
description: "DefaultAdminPanelOptionProvider 的自动生成类参考。"
---
# DefaultAdminPanelOptionProvider

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultAdminPanelOptionProvider : IAdminPanelOptionProvider`
**Base:** `IAdminPanelOptionProvider`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/DefaultAdminPanelOptionProvider.cs`

## 概述

`DefaultAdminPanelOptionProvider` 位于 `TaleWorlds.MountAndBlade.Multiplayer.Admin`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.Admin` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsUndecided` | `public bool IsUndecided { get; }` |

## 主要方法

### BuildAvailableOptions
`public override AdminPanelMultiSelectionOption BuildAvailableOptions(MBReadOnlyList<IAdminPanelMultiSelectionItem> options)`

**用途 / Purpose:** 组装并返回available options的构建结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildAvailableOptions(options);
```

### BuildAvailableOptions
`public override AdminPanelMultiSelectionOption BuildAvailableOptions(OptionType optionType, bool buildDefaultValue = true)`

**用途 / Purpose:** 组装并返回available options的构建结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildAvailableOptions(optionType, false);
```

### BuildOtherCultureOption
`public AdminPanelCultureOption BuildOtherCultureOption(AdminPanelCultureOption otherOption)`

**用途 / Purpose:** 组装并返回other culture option的构建结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildOtherCultureOption(otherOption);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.OnFinalize();
```

### BuildGameTypeOption
`public AdminPanelUsableMapsOption BuildGameTypeOption(AdminPanelVotableMultiSelectionOption gameTypeOption)`

**用途 / Purpose:** 组装并返回game type option的构建结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildGameTypeOption(gameTypeOption);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.OnFinalize();
```

### GetIsDisabled
`public override bool GetIsDisabled(out string reason)`

**用途 / Purpose:** 读取并返回当前对象中 is disabled 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetIsDisabled(reason);
```

### BuildOptionGroups
`public AdminPanelStartMissionAction BuildOptionGroups(MBReadOnlyList<IAdminPanelOptionGroup> optionGroups)`

**用途 / Purpose:** 组装并返回option groups的构建结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildOptionGroups(optionGroups);
```

### GetIsDisabled
`public override bool GetIsDisabled(out string reason)`

**用途 / Purpose:** 读取并返回当前对象中 is disabled 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetIsDisabled(reason);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.OnFinalize();
```

### GetIsAvailable
`public override bool GetIsAvailable()`

**用途 / Purpose:** 读取并返回当前对象中 is available 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetIsAvailable();
```

### BuildGameTypeOption
`public AdminPanelGameTypeDependentNumericOption BuildGameTypeOption(AdminPanelVotableMultiSelectionOption gameTypeOption)`

**用途 / Purpose:** 组装并返回game type option的构建结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildGameTypeOption(gameTypeOption);
```

### BuildInvalidGameTypes
`public AdminPanelGameTypeDependentNumericOption BuildInvalidGameTypes(string gameTypes)`

**用途 / Purpose:** 组装并返回invalid game types的构建结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildInvalidGameTypes("example");
```

### BuildRequiredGameTypes
`public AdminPanelGameTypeDependentNumericOption BuildRequiredGameTypes(string gameTypes)`

**用途 / Purpose:** 组装并返回required game types的构建结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildRequiredGameTypes("example");
```

### GetIsAvailable
`public override bool GetIsAvailable()`

**用途 / Purpose:** 读取并返回当前对象中 is available 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetIsAvailable();
```

### BuildGameTypeOption
`public AdminPanelGameTypeDependentAction BuildGameTypeOption(AdminPanelVotableMultiSelectionOption gameTypeOption)`

**用途 / Purpose:** 组装并返回game type option的构建结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildGameTypeOption(gameTypeOption);
```

### BuildInvalidGameTypes
`public AdminPanelGameTypeDependentAction BuildInvalidGameTypes(string gameTypes)`

**用途 / Purpose:** 组装并返回invalid game types的构建结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildInvalidGameTypes("example");
```

### BuildRequiredGameTypes
`public AdminPanelGameTypeDependentAction BuildRequiredGameTypes(string gameTypes)`

**用途 / Purpose:** 组装并返回required game types的构建结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildRequiredGameTypes("example");
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.OnTick(0);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.OnFinalize();
```

### GetOptionWithId
`public IAdminPanelOption GetOptionWithId(string id)`

**用途 / Purpose:** 读取并返回当前对象中 option with id 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetOptionWithId("example");
```

### GetActionWithId
`public IAdminPanelAction GetActionWithId(string id)`

**用途 / Purpose:** 读取并返回当前对象中 action with id 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetActionWithId("example");
```

### ApplyOptions
`public void ApplyOptions()`

**用途 / Purpose:** 将 options 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.ApplyOptions();
```

### GetOptionGroups
`public MBReadOnlyList<IAdminPanelOptionGroup> GetOptionGroups()`

**用途 / Purpose:** 读取并返回当前对象中 option groups 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAdminPanelOptionProvider 实例
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetOptionGroups();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.BuildAvailableOptions(options);
```

## 参见

- [本区域目录](../)