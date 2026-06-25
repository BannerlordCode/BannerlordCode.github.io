---
title: "MultiplayerPreloadHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerPreloadHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerPreloadHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPreloadHelper : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerPreloadHelper.cs`

## 概述

`MultiplayerPreloadHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MultiplayerPreloadHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetExtraEquipmentElementsForCharacter
`public override List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)`

**用途 / Purpose:** 获取 `extra equipment elements for character` 的当前值。

## 使用示例

```csharp
MultiplayerPreloadHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)