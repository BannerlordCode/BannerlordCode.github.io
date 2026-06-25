---
title: "SetMachineRotation"
description: "SetMachineRotation 的自动生成类参考。"
---
# SetMachineRotation

**Namespace:** NetworkMessages.FromClient
**Module:** NetworkMessages.FromClient
**Type:** `public sealed class SetMachineRotation : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `bin/TaleWorlds.MountAndBlade/NetworkMessages.FromClient/SetMachineRotation.cs`

## 概述

`SetMachineRotation` 位于 `NetworkMessages.FromClient`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `NetworkMessages.FromClient` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `UsableMachineId` | `public MissionObjectId UsableMachineId { get; }` |
| `HorizontalRotation` | `public float HorizontalRotation { get; }` |
| `VerticalRotation` | `public float VerticalRotation { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
SetMachineRotation instance = ...;
```

## 参见

- [本区域目录](../)