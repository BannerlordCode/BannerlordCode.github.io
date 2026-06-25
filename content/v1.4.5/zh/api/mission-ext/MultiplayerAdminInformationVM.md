---
title: "MultiplayerAdminInformationVM"
description: "MultiplayerAdminInformationVM 的自动生成类参考。"
---
# MultiplayerAdminInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerAdminInformationVM.cs`

## 概述

`MultiplayerAdminInformationVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MessageQueue` | `public MBBindingList<StringItemWithActionVM> MessageQueue { get; set; }` |

## 主要方法

### OnNewMessageReceived
`public void OnNewMessageReceived(string message)`

**用途 / Purpose:** 在 new message received 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminInformationVM 实例
MultiplayerAdminInformationVM multiplayerAdminInformationVM = ...;
multiplayerAdminInformationVM.OnNewMessageReceived("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerAdminInformationVM multiplayerAdminInformationVM = ...;
multiplayerAdminInformationVM.OnNewMessageReceived("example");
```

## 参见

- [本区域目录](../)