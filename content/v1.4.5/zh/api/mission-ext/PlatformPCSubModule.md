---
title: "PlatformPCSubModule"
description: "PlatformPCSubModule 的自动生成类参考。"
---
# PlatformPCSubModule

**Namespace:** TaleWorlds.MountAndBlade.Platform.PC
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlatformPCSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.Platform.PC/TaleWorlds.MountAndBlade.Platform.PC/PlatformPCSubModule.cs`

## 概述

`PlatformPCSubModule` 位于 `TaleWorlds.MountAndBlade.Platform.PC`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Platform.PC` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnMissionBehaviorInitialize
`public override void OnMissionBehaviorInitialize(Mission mission)`

**用途 / Purpose:** 在 mission behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PlatformPCSubModule 实例
PlatformPCSubModule platformPCSubModule = ...;
platformPCSubModule.OnMissionBehaviorInitialize(mission);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PlatformPCSubModule platformPCSubModule = ...;
platformPCSubModule.OnMissionBehaviorInitialize(mission);
```

## 参见

- [本区域目录](../)