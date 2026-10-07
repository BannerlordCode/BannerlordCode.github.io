---
title: "存档对象图 — SaveableTypeDefiner / SaveContext / LoadContext / DefinitionContext"
description: "Bannerlord 存档系统的对象图序列化架构：SaveManager 如何遍历游戏对象树并写入二进制流。"
---

# 存档对象图

**Namespace:** `TaleWorlds.SaveSystem` · `TaleWorlds.SaveSystem.Definition` · `TaleWorlds.SaveSystem.Save` · `TaleWorlds.SaveSystem.Load`  
**Module:** `TaleWorlds.SaveSystem` · `TaleWorlds.CampaignSystem`  
**Type:** 架构主题页 — 跨 `SaveManager` / `DefinitionContext` / `SaveableTypeDefiner` / `SaveContext` / `LoadContext`  
**源文件：** `TaleWorlds.SaveSystem/SaveManager.cs` · `TaleWorlds.SaveSystem/Definition/DefinitionContext.cs` · `TaleWorlds.SaveSystem/SaveableTypeDefiner.cs` · `TaleWorlds.SaveSystem/Save/SaveContext.cs` · `TaleWorlds.SaveSystem/Load/LoadContext.cs` · `TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs`  
**行号口径：** 本页所有 `X.cs:N` 均指 **v1.3.15** 源码树（`bannerlord-1.3.15/`）。

> 节 schema：本页采用规范七节（概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航）。

## 概述

Bannerlord 的存档系统基于**对象图序列化**模型。`SaveManager` 是整个存档流程的入口，它从打了 `[SaveableRootClass]`（`SaveableRootClassAttribute.cs:7`）的根对象出发，沿着打了 `[SaveableField]`/`[SaveableProperty]`（`SaveableFieldAttribute.cs:7`、`SaveablePropertyAttribute.cs:7`）的成员遍历整棵对象树，将整棵树编码为紧凑的二进制格式。存档时，`SaveContext` 提供写入通道；读档时，`LoadContext` 负责重建对象引用。`DefinitionContext` 与 `SaveableTypeDefiner` 共同维护类型元数据，确保跨版本兼容。

## 心智模型

把存档过程想象成**深度优先遍历一棵树**：

1. **根节点**是 `Campaign` 对象，它持有所有子系统（Party、Settlement、Hero 等）的引用。
2. 每个已在 `SaveableTypeDefiner` 里 `AddClassDefinition(type, saveId)`（`SaveableTypeDefiner.cs:100`）注册过的类，才是一个**可序列化节点**；成员是否入档由 `[SaveableField]`/`[SaveableProperty]` 决定。
3. `SaveManager` 从根出发，把根对象压入 `_objectsToIterate` 工作队列（`SaveContext.cs:116`）后逐节点处理；没有 `ISaveable.Write` 这种回调。
4. `DefinitionContext.FillWithCurrentTypes()`（`DefinitionContext.cs:173`）在启动期一次性完成类型收集与 ID 分配；`DefineTypes` 这个方法不存在。
5. 读档时反向进行：由 `LoadContext.Load`（`LoadContext.cs:64`）按存档流里的类型定义重建对象；没有 `ISaveable.Read` 这种回调。

关键洞察：**对象引用被替换为整数 ID**。如果两个字段指向同一个对象，序列化时只写一次，后续引用只写 ID。这既节省空间，也保留了对象图的拓扑结构。

## 怎么用

### 存档流程

1. 调用 `SaveManager.SaveGame(string saveName)` 触发存档。
2. `SaveManager` 创建 `SaveContext`，传入目标文件流。
3. `SaveContext` 首先调用 `DefinitionContext.DefineTypes()`，遍历所有 `ISaveable` 类型并分配 ID。
4. 然后 `SaveManager` 从 `Campaign` 开始，递归调用每个 `ISaveable.Write(SaveContext)`。
5. 每个 `Write()` 内部先写自身字段，再写引用的子对象（通过 `SaveContext.WriteObject()`）。
6. 全部写完后，`SaveContext` 关闭流，存档完成。

### 读档流程

1. 调用 `SaveManager.LoadGame(string saveName)` 触发读档。
2. `SaveManager` 创建 `LoadContext`，传入源文件流。
3. `LoadContext` 先读类型表，建立 ID 到类型的映射。
4. 然后从根对象开始，递归调用每个 `ISaveable.Read(LoadContext)`。
5. 每个 `Read()` 内部先读自身字段，再通过 `LoadContext.ReadObject()` 按 ID 重建引用。
6. 全部读完后，对象图恢复完毕，游戏继续运行。

### 自定义存档字段

若要在自定义类中参与存档：

1. 不需要实现任何接口。要做的是：给类写一个 `SaveableTypeDefiner` 子类并用 `AddClassDefinition(type, saveId)`（`SaveableTypeDefiner.cs:100`）注册，然后给要入档的成员打 `[SaveableField(id)]`/`[SaveableProperty(id)]`。
2. 在 `DefineClassTypes()`（`SaveableTypeDefiner.cs:30`）里注册类定义。
3. 在 `DefineContainerDefinitions()`（`SaveableTypeDefiner.cs:70`）里注册容器定义（如果类有集合字段）。
4. 确保类有无参构造函数，供反序列化时使用。

## 关键成员

### SaveManager

存档系统门面，协调存档与读档的完整流程。

- `SaveManager.cs:14` — 类声明，继承自 `SaveManagerBase`。
- `SaveManager.cs:17` — 静态实例访问点，全局唯一入口。
- `SaveManager.cs:69` — `SaveGame` 方法实现，创建 `SaveContext` 并启动序列化。
- `SaveManager.cs:149` — `LoadGame` 方法实现，创建 `LoadContext` 并启动反序列化。

### DefinitionContext

类型定义上下文，负责在序列化前扫描并注册所有遇到的类型。

- `DefinitionContext.cs:10` — 类声明，维护类型 ID 映射表。
- `DefinitionContext.cs:68` — `DefineTypes` 入口，遍历对象图收集类型。
- `DefinitionContext.cs:173` — 类型注册逻辑，为每个新类型分配唯一 ID。
- `DefinitionContext.cs:278` — 类型查找，通过 ID 或类型名获取元数据。
- `DefinitionContext.cs:283` — 版本兼容检查，处理类型增删。
- `DefinitionContext.cs:285` — 类型别名映射，支持跨版本类型重命名。

### SaveableTypeDefiner

为特定模块定义可序列化类型的工具类。

- `SaveableTypeDefiner.cs:10` — 基类声明，提供类型定义基础设施。
- `SaveableTypeDefiner.cs:13` — 构造函数，接收 `DefinitionContext`。
- `SaveableTypeDefiner.cs:30` — `DefineTypes` 虚方法，子类重写以注册类型。
- `SaveableTypeDefiner.cs:70` — 类型注册辅助方法，简化注册流程。
- `SaveableTypeDefiner.cs:100` — 注册一个类定义，并给它分配在该 Definer 基号下唯一的小 id（见 `SaveableCampaignTypeDefiner.cs:52` 的官方范本）。
- `SaveableTypeDefiner.cs:157` — 嵌套类型注册，处理内部类。

### SaveContext

存档时的写入通道，提供类型安全的序列化 API。

- `SaveContext.cs:12` — 类声明，封装底层二进制写入。
- `SaveContext.cs:27` — `WriteObject` 方法，写入对象引用（按 ID 去重）。
- `SaveContext.cs:46` — `Write` 泛型方法，写入基本类型字段。
- `SaveContext.cs:278` — 引用表管理，记录已写入对象的 ID。

### LoadContext

读档时的读取通道，提供类型安全的反序列化 API。

- `LoadContext.cs:11` — 类声明，封装底层二进制读取。
- `LoadContext.cs:31` — `ReadObject` 方法，按 ID 读取对象引用。
- `LoadContext.cs:64` — `Read` 泛型方法，读取基本类型字段。

### SaveableCampaignTypeDefiner

Campaign 模块的类型定义器，注册所有 Campaign 相关的可序列化类型。

- `SaveableCampaignTypeDefiner.cs:41` — 类声明，继承自 `SaveableTypeDefiner`。
- `SaveableCampaignTypeDefiner.cs:44` — `DefineTypes` 实现，注册 Campaign 核心类型。
- `SaveableCampaignTypeDefiner.cs:50` — 注册 Party 相关类型。
- `SaveableCampaignTypeDefiner.cs:52` — 注册 Settlement 相关类型。

## 真实示例

### 示例一：存档一个自定义组件

```csharp
// 1. 定义类，打 [SaveableField]/[SaveableProperty] 标记要入档的成员
public class MyCustomComponent
{
    [SaveableField(1)]
    private int _value;

    [SaveableProperty(2)]
    public Hero Owner { get; private set; }
}

// 2. 写一个 Definer 子类，用 AddClassDefinition 注册
public class MyTypeDefiner : SaveableTypeDefiner
{
    public MyTypeDefiner() : base(1001) { }

    protected override void DefineClassTypes()
    {
        base.AddClassDefinition(typeof(MyCustomComponent), 1);
    }
}
```

### 示例二：理解引用去重

```csharp
// 假设 hero1 和 hero2 引用同一个 Party 对象
var party = new Party();
hero1.Party = party;
hero2.Party = party;

// 存档时，Party 只被序列化一次
// 第二次遇到时，只写入已分配的 ID
```

### 示例三：类型定义流程

```csharp
// SaveableTypeDefiner 子类示例
public class MyTypeDefiner : SaveableTypeDefiner
{
    public MyTypeDefiner(DefinitionContext context) : base(context) { }

    public override void DefineTypes()
    {
        DefineType<MyCustomComponent>();
        DefineType<MyOtherComponent>();
    }
}
```

## 参见

- [存档系统 / Save System](../save-system)
- [GameModel 装饰模式](../gamemodel-decorator)
- [Action 家族](../action-family)
- [SaveManager 类页](../../api/save-system/SaveManager)
- [SaveContext 类页](../../api/save-system/SaveContext)
- [LoadContext 类页](../../api/save-system/LoadContext)
- [DefinitionContext 类页](../../api/save-system/DefinitionContext)
- [SaveableTypeDefiner 类页](../../api/save-system/SaveableTypeDefiner)
- [SaveableCampaignTypeDefiner 类页](../../api/campaign-ext/SaveableCampaignTypeDefiner)

## 导航

- ↑ Parent: [..](../)
- ↔ Sibling: [UI 三层架构](../ui-three-layers) | [Action 家族](../action-family) | [GameModel 装饰模式](../gamemodel-decorator)
- 相关类页: [SaveManager](../../api/save-system/SaveManager) | [SaveableCampaignTypeDefiner](../../api/campaign-ext/SaveableCampaignTypeDefiner)
