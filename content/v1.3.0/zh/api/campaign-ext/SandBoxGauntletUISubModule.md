---
title: "SandBoxGauntletUISubModule"
description: "SandBoxGauntletUISubModule 的自动生成类参考。"
---
# SandBoxGauntletUISubModule

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class SandBoxGauntletUISubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `SandBox.GauntletUI/SandBoxGauntletUISubModule.cs`

## 概述

`SandBoxGauntletUISubModule` 位于 `SandBox.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnCampaignStart
`public override void OnCampaignStart(Game game, object starterObject)`

**用途 / Purpose:** 在 「campaign start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxGauntletUISubModule 实例
SandBoxGauntletUISubModule sandBoxGauntletUISubModule = ...;
sandBoxGauntletUISubModule.OnCampaignStart(game, starterObject);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**用途 / Purpose:** 在 「game end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxGauntletUISubModule 实例
SandBoxGauntletUISubModule sandBoxGauntletUISubModule = ...;
sandBoxGauntletUISubModule.OnGameEnd(game);
```

### BeginGameStart
`public override void BeginGameStart(Game game)`

**用途 / Purpose:** 处理与 「begin game start」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SandBoxGauntletUISubModule 实例
SandBoxGauntletUISubModule sandBoxGauntletUISubModule = ...;
sandBoxGauntletUISubModule.BeginGameStart(game);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SandBoxGauntletUISubModule sandBoxGauntletUISubModule = ...;
sandBoxGauntletUISubModule.OnCampaignStart(game, starterObject);
```

## 参见

- [本区域目录](../)