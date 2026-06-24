<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AdminUpdateMultiplayerOptions`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AdminUpdateMultiplayerOptions

**Namespace:** NetworkMessages.FromClient
**Module:** NetworkMessages.FromClient
**Type:** `public sealed class AdminUpdateMultiplayerOptions : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromClient/AdminUpdateMultiplayerOptions.cs`

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

**用途 / Purpose:** 向当前集合/状态中添加 `multiplayer option`。

### AddMultiplayerOption
`public void AddMultiplayerOption(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode accessMode, int value)`

**用途 / Purpose:** 向当前集合/状态中添加 `multiplayer option`。

### AddMultiplayerOption
`public void AddMultiplayerOption(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode accessMode, string value)`

**用途 / Purpose:** 向当前集合/状态中添加 `multiplayer option`。

## 使用示例

```csharp
var value = new AdminUpdateMultiplayerOptions();
value.AddMultiplayerOption(optionType, accessMode, false);
```

## 参见

- [完整类目录](../catalog)