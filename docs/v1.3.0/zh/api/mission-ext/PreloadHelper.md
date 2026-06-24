<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PreloadHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PreloadHelper

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PreloadHelper`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PreloadHelper.cs`

## 概述

`PreloadHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `PreloadHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### PreloadCharacters
`public void PreloadCharacters(List<BasicCharacterObject> characters)`

**用途 / Purpose:** 处理 `preload characters` 相关逻辑。

### WaitForMeshesToBeLoaded
`public void WaitForMeshesToBeLoaded()`

**用途 / Purpose:** 处理 `wait for meshes to be loaded` 相关逻辑。

### PreloadEquipments
`public void PreloadEquipments(List<Equipment> equipments)`

**用途 / Purpose:** 处理 `preload equipments` 相关逻辑。

### PreloadItems
`public void PreloadItems(List<ItemObject> items)`

**用途 / Purpose:** 处理 `preload items` 相关逻辑。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

## 使用示例

```csharp
PreloadHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)