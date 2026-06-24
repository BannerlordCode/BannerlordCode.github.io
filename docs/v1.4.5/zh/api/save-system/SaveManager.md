<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveManager`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SaveManager

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public static class SaveManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveManager.cs`

## 概述

`SaveManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SaveManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### InitializeGlobalDefinitionContext
`public static void InitializeGlobalDefinitionContext()`

**用途 / Purpose:** 初始化 `global definition context` 的状态、资源或绑定。

### CheckSaveableTypes
`public static List<Type> CheckSaveableTypes()`

**用途 / Purpose:** 处理 `check saveable types` 相关逻辑。

### Save
`public static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`

**用途 / Purpose:** 保存 `save` 数据。

### ShouldResolveConflicts
`public static bool ShouldResolveConflicts()`

**用途 / Purpose:** 处理 `should resolve conflicts` 相关逻辑。

### LoadMetaData
`public static MetaData LoadMetaData(string saveName, ISaveDriver driver)`

**用途 / Purpose:** 加载 `meta data` 数据。

### Load
`public static LoadResult Load(string saveName, ISaveDriver driver)`

**用途 / Purpose:** 加载 `load` 数据。

### Load
`public static LoadResult Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)`

**用途 / Purpose:** 加载 `load` 数据。

## 使用示例

```csharp
SaveManager.InitializeGlobalDefinitionContext();

MetaData metaData = new MetaData();
metaData["ModVersion"] = "1.0.0";

SaveOutput saveResult = SaveManager.Save(
    Campaign.Current,
    metaData,
    "my_mod_save",
    SaveGameFileDriver
);
```

## 参见

- [完整类目录](../catalog)
