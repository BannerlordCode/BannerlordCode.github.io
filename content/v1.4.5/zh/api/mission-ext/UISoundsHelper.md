---
title: "UISoundsHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UISoundsHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# UISoundsHelper

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class UISoundsHelper`
**Base:** 无
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/UISoundsHelper.cs`

## 概述

`UISoundsHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `UISoundsHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### PlayUISound
`public static void PlayUISound(string soundName)`

**用途 / Purpose:** 处理 `play u i sound` 相关逻辑。

## 使用示例

```csharp
UISoundsHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)