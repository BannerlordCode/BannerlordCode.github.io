---
title: "MissionAgentStatusUIHandler"
description: "MissionAgentStatusUIHandler 的自动生成类参考。"
---
# MissionAgentStatusUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentStatusUIHandler : MissionBattleUIBaseView, IInteractionInterfaceHandler`
**Base:** `MissionBattleUIBaseView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionAgentStatusUIHandler.cs`

## 概述

`MissionAgentStatusUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionAgentStatusUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddInteractionMessage
`public virtual void AddInteractionMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** **用途 / Purpose:** 将 interaction message 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusUIHandler 实例
MissionAgentStatusUIHandler missionAgentStatusUIHandler = ...;
missionAgentStatusUIHandler.AddInteractionMessage(message);
```

### RemoveInteractionMessage
`public virtual void RemoveInteractionMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 interaction message。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusUIHandler 实例
MissionAgentStatusUIHandler missionAgentStatusUIHandler = ...;
missionAgentStatusUIHandler.RemoveInteractionMessage(message);
```

### HasInteractionMessage
`public virtual bool HasInteractionMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 interaction message。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusUIHandler 实例
MissionAgentStatusUIHandler missionAgentStatusUIHandler = ...;
var result = missionAgentStatusUIHandler.HasInteractionMessage(message);
```

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IMissionAgentStatusUIHandler service = ...;
```

## 参见

- [本区域目录](../)