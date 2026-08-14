---
title: "SaveManager"
description: "TaleWorlds.SaveSystem 的静态执行总管：建立 DefinitionContext，调用 SaveContext/LoadContext，并把结果交给 ISaveDriver。"
---
# SaveManager

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public static class SaveManager`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.SaveSystem/SaveManager.cs`

## 概述

`SaveManager` 是保存系统的流程总管，不是存档文件名管理器，也不是 Behavior 状态的替代 API。它负责：

- 通过 `InitializeGlobalDefinitionContext` 收集当前程序集中的保存定义并记录定义错误；
- 用 `Save(object target, MetaData metaData, string saveName, ISaveDriver driver)` 创建 `SaveContext`，收集对象图，再交给驱动写文件；
- 用 `Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)` 创建 `LoadContext`，恢复根对象并返回 `LoadResult`；
- 暴露 `CheckSaveableTypes()`、`LoadMetaData()` 和 `.sav` 扩展名等诊断/协议入口。

大多数 mod 不应直接替换游戏的 `ISaveDriver` 或手动调用底层上下文。mod 应先正确完成 [SaveableTypeDefiner](../SaveableTypeDefiner/)、字段/属性 Attribute，以及 [IDataStore](../../campaign-ext/IDataStore/) 的 Behavior 注册，让游戏已有的保存入口处理它们。

## 心智模型

保存有四层：

1. 类型定义层：`DefinitionContext.FillWithCurrentTypes()` 读取 definers，失败时保存直接产生 `SaveOutput` 错误。
2. 对象图层：`SaveContext.Save` 从 `target` 收集成员和引用。
3. 文件驱动层：`ISaveDriver.Save` 把 `SaveData` 写入实际存储，可能异步返回。
4. 恢复层：`LoadContext.Load` 读取 `LoadData`，再按定义还原根对象；如果使用 late initialize，会返回回调初始化器。

`SaveManager` 在保存期间把 `_isLoading` 设为 false，在加载期间设为 true，并设置当前 `OperatingVersion`。这些是保存系统内部的阶段状态，不是 mod 业务逻辑的“暂停开关”。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `SaveFileExtension` | 固定为 `"sav"` |
| `InitializeGlobalDefinitionContext()` | 创建并填充全局定义上下文，输出定义错误 |
| `CheckSaveableTypes()` | 扫描带 Saveable Attribute 但当前上下文尚无定义的字段/属性类型 |
| `Save(...)` | 构建 `SaveContext`，调用驱动保存，返回 `SaveOutput` |
| `LoadMetaData(...)` | 只让驱动读取存档元数据 |
| `Load(...)` | 构建 `LoadContext` 并返回 `LoadResult` |
| `ShouldResolveConflicts()` | 反映当前是否在加载流程中，供冲突解析逻辑判断 |

## 真实示例：验证、保存与加载

这是源码中 `SaveManager` 的实际公共调用形状。`ISaveDriver` 和 `MetaData` 通常由游戏的存档层提供；mod 不应伪造一个驱动来绕过游戏存档 UI。

```csharp
SaveManager.InitializeGlobalDefinitionContext();
List<Type> missingTypes = SaveManager.CheckSaveableTypes();

SaveOutput saveResult = SaveManager.Save(
    Campaign.Current,
    campaignMetaData,
    "my_campaign_slot",
    saveDriver);

if (saveResult != null && saveResult.Successful)
{
    LoadResult loadResult = SaveManager.Load("my_campaign_slot", saveDriver);
    if (loadResult != null && loadResult.Successful)
    {
        Campaign loadedCampaign = (Campaign)loadResult.RootObject;
    }
}
```

上例的关键不是在 Behavior 中主动保存，而是保证 `Campaign.Current` 的对象图和所有 mod 类型都有定义。若只新增 Behavior 字段，使用 [IDataStore](../../campaign-ext/IDataStore/)；若新增可被多个对象引用的类，再为该类加 Attribute 与 definer。

## 加载阶段与晚初始化

`Load` 默认使用 `loadAsLateInitialize: false`。传入 `true` 时，成功结果会附带 `LoadCallbackInitializator`，由调用方在合适的游戏阶段执行延后的 `[LoadInitializationCallback]`。这与 [MBObjectBase](../../campaign-ext/MBObjectBase/) 的 `OnBeforeLoad`、`PreAfterLoad`、`AfterLoad` 配合；不要在 `Load` 返回的第一刻假设所有派生系统都已经完成最终初始化。

`LoadMetaData` 只询问驱动，不会恢复 `RootObject`。`Save` 可能返回 continuing 状态，因为 `ISaveDriver.Save` 可以异步完成；调用者应根据 `SaveOutput`/驱动结果处理，而不是立即假定文件已落盘。

## 风险与坏档边界

- **定义错误会阻止保存。** `InitializeGlobalDefinitionContext` 收集的错误会让 `Save` 返回失败结果；检查 [SaveableTypeDefiner](../SaveableTypeDefiner/) 和所有容器/成员定义，不要用 try/catch 把错误吞掉后继续发布。
- **驱动不是定义层。** `ISaveDriver` 只负责元数据/数据存取；它不会修复重复 `LocalSaveId`、未知类型或不兼容字段。
- **保存是异步边界。** `ISaveDriver.Save` 返回 `Task<SaveResultWithMessage>`；保存结果可能是 continuing 或失败。不要在结果成功前覆盖旧档或退出关键状态。
- **加载不兼容要显式处理。** `LoadResult` 失败、根对象为空或旧类型不匹配时，不要把半加载对象送入战役 tick。
- **不要把阶段状态当游戏状态。** `ShouldResolveConflicts()` 只是当前加载标志；`OperatingVersion` 也不是给 mod 保存自己的版本字段的替代品。
- **错误的 late initialization。** 在回调初始化器执行前访问依赖对象，会产生 null 或顺序相关错误；将派生引用恢复放在明确的 `AfterLoad`/加载完成事件之后。

## 跨版本提示

1.3.15 与 1.4.5 都提供 `.sav`、定义上下文、`Save`、`LoadMetaData`、`Load` 和 late initialize 参数。内部实现和官方类型定义会增长；跨版本 mod 必须保持自己的 type ID、member ID、key 和字段类型兼容，而不能依赖官方类型表的绝对编号。

## 依赖关系

- 定义：[SaveableTypeDefiner](../SaveableTypeDefiner/)、[SaveableFieldAttribute](../SaveableFieldAttribute/)、[SaveablePropertyAttribute](../SaveablePropertyAttribute/)。
- Behavior：[IDataStore](../../campaign-ext/IDataStore/) 是 Behavior 私有状态的正确入口。
- 对象身份：[MBObjectManager](../../campaign-ext/MBObjectManager/) 与 [MBObjectBase](../../campaign-ext/MBObjectBase/) 提供可恢复对象引用。
- 战役根：[Campaign](../../campaign/Campaign/) 及其行为数据构成常见 `target` 对象图。

- 父级：[save-system API](./)
- 同级：[SaveableTypeDefiner](../SaveableTypeDefiner/) · [SaveableFieldAttribute](../SaveableFieldAttribute/)
