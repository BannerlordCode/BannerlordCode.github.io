<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxSaveManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxSaveManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandBoxSaveManager : ISaveManager`
**Base:** `ISaveManager`
**File:** `SandBox/SandBoxSaveManager.cs`

## 概述

`SandBoxSaveManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SandBoxSaveManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAutoSaveInterval
`public int GetAutoSaveInterval()`

**用途 / Purpose:** 获取 `auto save interval` 的当前值。

### OnSaveOver
`public void OnSaveOver(bool isSuccessful, string newSaveGameName)`

**用途 / Purpose:** 当 `save over` 事件触发时调用此方法。

## 使用示例

```csharp
var manager = SandBoxSaveManager.Current;
```

## 参见

- [完整类目录](../catalog)