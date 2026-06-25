---
title: "AdminUpdateMultiplayerOptions"
description: "AdminUpdateMultiplayerOptions 的自动生成类参考。"
---
# AdminUpdateMultiplayerOptions

**Namespace:** NetworkMessages.FromClient
**Module:** NetworkMessages.FromClient
**Type:** `public sealed class AdminUpdateMultiplayerOptions : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `bin/TaleWorlds.MountAndBlade/NetworkMessages.FromClient/AdminUpdateMultiplayerOptions.cs`

## 概述

`AdminUpdateMultiplayerOptions` 位于 `NetworkMessages.FromClient`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `NetworkMessages.FromClient` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OptionType` | `public MultiplayerOptions.OptionType OptionType { get; }` |
| `AccessMode` | `public MultiplayerOptions.MultiplayerOptionsAccessMode AccessMode { get; }` |
| `StringValue` | `public string StringValue { get; }` |
| `BoolValue` | `public bool BoolValue { get; }` |
| `IntValue` | `public int IntValue { get; }` |
| `Options` | `public List<AdminMultiplayerOptionInfo> Options { get; }` |
| `OptionCount` | `public int OptionCount { get; }` |

## 主要方法

### AddMultiplayerOption
`public void AddMultiplayerOption(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode accessMode, bool value)`

**用途 / Purpose:** 将 「multiplayer option」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AdminUpdateMultiplayerOptions 实例
AdminUpdateMultiplayerOptions adminUpdateMultiplayerOptions = ...;
adminUpdateMultiplayerOptions.AddMultiplayerOption(optionType, accessMode, false);
```

### AddMultiplayerOption
`public void AddMultiplayerOption(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode accessMode, int value)`

**用途 / Purpose:** 将 「multiplayer option」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AdminUpdateMultiplayerOptions 实例
AdminUpdateMultiplayerOptions adminUpdateMultiplayerOptions = ...;
adminUpdateMultiplayerOptions.AddMultiplayerOption(optionType, accessMode, 0);
```

### AddMultiplayerOption
`public void AddMultiplayerOption(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode accessMode, string value)`

**用途 / Purpose:** 将 「multiplayer option」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AdminUpdateMultiplayerOptions 实例
AdminUpdateMultiplayerOptions adminUpdateMultiplayerOptions = ...;
adminUpdateMultiplayerOptions.AddMultiplayerOption(optionType, accessMode, "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AdminUpdateMultiplayerOptions adminUpdateMultiplayerOptions = ...;
adminUpdateMultiplayerOptions.AddMultiplayerOption(optionType, accessMode, false);
```

## 参见

- [本区域目录](../)