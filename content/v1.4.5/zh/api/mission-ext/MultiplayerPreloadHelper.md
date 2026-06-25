---
title: "MultiplayerPreloadHelper"
description: "MultiplayerPreloadHelper 的自动生成类参考。"
---
# MultiplayerPreloadHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPreloadHelper : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerPreloadHelper.cs`

## 概述

`MultiplayerPreloadHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MultiplayerPreloadHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetExtraEquipmentElementsForCharacter
`public override List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)`

**用途 / Purpose:** 读取并返回当前对象中 extra equipment elements for character 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerPreloadHelper 实例
MultiplayerPreloadHelper multiplayerPreloadHelper = ...;
var result = multiplayerPreloadHelper.GetExtraEquipmentElementsForCharacter(character, false);
```

## 使用示例

```csharp
MultiplayerPreloadHelper.Initialize();
```

## 参见

- [本区域目录](../)