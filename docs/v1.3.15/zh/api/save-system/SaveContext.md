<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveContext`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveContext

**命名空间:** TaleWorlds.SaveSystem.Save  
**模块:** TaleWorlds.SaveSystem  
**类型:** public class（实现 `ISaveContext`）

存档系统的**写入侧上下文**。`SaveManager.Save` 内部创建一个 `SaveContext`，由它遍历对象图、收集所有需要序列化的对象/容器/字符串，并产出最终的存档数据。

## 概述

`SaveContext` 持有根对象与 `DefinitionContext`（类型定义表）。它维护四张核心索引表：

| 字段 | 作用 |
|------|------|
| `_childObjects` / `_idsOfChildObjects` | 所有被引用的可存档对象及其整数 ID |
| `_childContainers` / `_idsOfChildContainers` | 容器（列表/字典等）及其 ID |
| `_strings` / `_idsOfStrings` | 字符串去重表 |

收集阶段使用 `TWParallel.ForWithoutRenderThread` 并行处理，是存档性能的关键路径。

## 主要属性

| 名称 | 类型 | 描述 |
|------|------|------|
| `RootObject` | object | 本次存档的根对象（通常是游戏状态） |
| `DefinitionContext` | DefinitionContext | 类型/字段定义上下文 |

## 主要静态成员

```csharp
public static SaveStatistics GetStatistics();
public static bool EnableSaveStatistics { get; }   // 恒为 false（发布版）
```

`GetStatistics` 返回类型与容器的统计信息，仅在 `EnableSaveStatistics` 为 true 时有意义。

## 关键流程

1. **构造**：`new SaveContext(definitionContext)`，初始化容量为 131072 的各索引表。
2. **收集**：`CollectSaveDatas()` 并行遍历 `_childObjects` / `_childContainers`，为每个对象生成 `SaveData`。
3. **写出**：由 `SaveManager` 协调驱动程序将收集结果写入文件。

## 使用示例

```csharp
SaveManager.InitializeGlobalDefinitionContext();
var defCtx = SaveManager.GetGlobalDefinitionContext();
var ctx = new SaveContext(defCtx);
// 通常不需要手动调用；SaveManager.Save 内部已封装
```

::: tip 给 mod 开发者
绝大多数情况下你**不需要直接使用 `SaveContext`**——只需给字段标注 `[SaveableField]`、给属性标注 `[SaveableProperty]`，`SaveManager` / `SaveContext` 会自动处理序列化。直接操作此类型属于高级用法。
:::

## 参见

- [SaveManager](./SaveManager.md)
- [LoadContext](./LoadContext.md)
- [SaveAttributes](./SaveAttributes.md)
