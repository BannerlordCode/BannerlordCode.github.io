---
title: "SaveableInterfaceAttribute"
description: "贴在接口上的 Attribute：用 SaveId 把一个接口类型登记进存档定义上下文，使接口类型字段能以“记录具体实现类型”的方式多态持久化，是 InterfaceDefinition 的入口标记。"
---
# SaveableInterfaceAttribute

**命名空间：** TaleWorlds.SaveSystem
**模块：** TaleWorlds.SaveSystem
**类型：** `[AttributeUsage(AttributeTargets.Interface)] public class SaveableInterfaceAttribute : Attribute`
**源文件：** `TaleWorlds.SaveSystem/SaveableInterfaceAttribute.cs`

## 概述

`SaveableInterfaceAttribute` 是一个**只能贴在接口（interface）上**的 Attribute（`[AttributeUsage(AttributeTargets.Interface)]`）。它只做一件事：给接口一个 `SaveId`（`int`），向存档系统声明“这个接口是可持久化的类型”。配合具体实现类上的 `[SaveableRootClass]`，它让存档系统能处理“声明类型是接口、运行时却是某具体类”的多态字段——写入时记录实际具体类型的 `SaveId`，读档时据此重建具体对象并赋回接口引用。它是 [InterfaceDefinition](../InterfaceDefinition) 的入口标记：保存系统在 `InitializeGlobalDefinitionContext` 阶段扫描到带它的接口，便生成对应的接口定义节点。与 `[SaveableRootClass]`（标记具体类）不同，它标记的是“抽象的契约类型”。

## 心智模型

- **是什么：** 接口级的存档契约标记，用 `SaveId` 把接口登记为可序列化类型，支撑多态接口引用的持久化。
- **何时用：** 当它处在保存系统的**类型定义层（接口子层）**。当你有一个接口类型字段（如 `IMyState`），且它的实际实现可能是多个具体类之一、需要随存档多态往返时，给接口贴 `[SaveableInterface(saveId)]`，并给每个实现类贴 `[SaveableRootClass]`。
- **何时不要用：** 不要把它贴到类或结构体上（AttributeUsage 限制为 Interface，贴错不生效）；不要给“只有单一固定实现、且不需要多态”的字段用接口——直接用具体类 + `[SaveableRootClass]` + `[SaveableField]` 更简单；更不要把接口当成对象共享身份容器（共享身份走 [MBObjectManager](../../campaign-ext/MBObjectManager)）。
- **谁创建/持有：** 由你在源码里贴在接口声明上；保存系统在 `InitializeGlobalDefinitionContext` 阶段扫描到它，生成 [InterfaceDefinition](../InterfaceDefinition) 并汇总进 [DefinitionContext](../DefinitionContext)。
- **处在哪一层：** 定义层（静态元数据，被读取一次）。真正多态重建发生在序列化/反序列化阶段，由 [ArchiveSerializer](../ArchiveSerializer)/[ArchiveDeserializer](../ArchiveDeserializer) 依具体类型完成。

## 何时使用 / 何时不要使用

适合：

- 可存档类持有接口类型字段，且实现类可随版本/配置变化（多态持久化）。
- 例如：`IMyBehaviorStrategy` 字段，存档里存的是 `AggressiveStrategy` 或 `DefensiveStrategy` 的实例。

不适合 / 危险：

- **接口没贴 `[SaveableInterface]` 但字段用了它** → 接口未被登记，序列化不知道如何处理多态引用，读档无法重建（坏档/空引用）。
- **实现类没贴 `[SaveableRootClass]`** → 具体类型没有定义，接口引用背后的对象无法重建。
- **接口 `SaveId` 与类/其它类型冲突或跨版本变更** → 定义冲突或旧档识别失败（坏档）。
- **滥用接口字段存共享对象** → 接口定义只解决“类型识别”，对象去重仍需 [MBObjectManager](../../campaign-ext/MBObjectManager)。

## 依赖图

- [InterfaceDefinition](../InterfaceDefinition) —— 保存系统扫描到本 Attribute 后生成的定义节点，二者 `SaveId` 对应。
- [SaveableRootClassAttribute](../SaveableRootClassAttribute) —— 各具体实现类的根标记，使接口引用能被还原成具体对象。
- [SaveableTypeDefiner](../SaveableTypeDefiner) —— 汇总类型定义、把接口登记进上下文的引擎入口。
- [DefinitionContext](../DefinitionContext) —— 持有接口定义，供序列化按接口类型查表。
- [ArchiveSerializer](../ArchiveSerializer) / [ArchiveDeserializer](../ArchiveDeserializer) —— 写出/重建接口引用的具体类型。
- [MBObjectManager](../../campaign-ext/MBObjectManager) —— 接口字段若引用需共享身份的对象，仍由它处理去重。

## 风险

- **接口/实现类编号缺失或冲突** → 多态引用无法落地，`LoadResult` 失败或接口为 `null`（坏档）。
- **跨版本改接口 `SaveId`** → 旧档按旧编号找不到接口定义，读档失败。
- **实现类未被登记** → 序列化遇到未知具体类型，查不到类定义而抛异常。
- **把“共享身份”误用接口表达** → 同一对象应走 [MBObjectManager](../../campaign-ext/MBObjectManager)，否则被复制成多份、互相脱节。
- Attribute 是静态元数据：它只在定义阶段被读取一次，**不要**指望运行期改 `SaveId` 来“修复”兼容问题。

## 成员说明

### 构造参数 `saveId`（`int`）

接口在全局定义上下文中的稳定类型编号，存入 `SaveId` 属性。必须跨版本稳定且全局唯一；它决定接口在存档里的身份，与具体实现类的 `[SaveableRootClass]` 编号处在同一编号体系内、不可冲突。

### 属性 `SaveId`（`int`，可读写）

保存的接口编号。`[SaveableInterface(8000)]` 中的 `8000` 即落到这里。产品代码通常只读取它；运行期改写没有意义，因为 [DefinitionContext](../DefinitionContext) 在 `InitializeGlobalDefinitionContext` 时已经按初始值建好。

## 示例

给接口贴 `[SaveableInterface]`，给实现类贴 `[SaveableRootClass]`；模组侧触发保存，接口字段里的具体实现被多态记录与还原：

```csharp
using TaleWorlds.SaveSystem;

// 1) 接口标记：声明该接口可持久化（SaveId 须全局唯一、跨版本稳定）
[SaveableInterface(8000)]
public interface IMyStrategy { }

// 2) 具体实现类作为可存档根
[SaveableRootClass(8001)]
public class AggressiveStrategy : IMyStrategy
{
    [SaveableField(1)] public int Aggression { get; set; }
}

// 3) 以 Game 为根保存，接口字段里的具体实现经 InterfaceDefinition 正确往返：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

注意：接口 `SaveId`（如 `8000`）与实现类 `[SaveableRootClass]` 编号（如 `8001`）必须都在全局唯一且稳定；实现类也必须可存档，否则接口引用无法重建。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[InterfaceDefinition](../InterfaceDefinition) · [SaveableRootClassAttribute](../SaveableRootClassAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [SaveManager](../SaveManager)
