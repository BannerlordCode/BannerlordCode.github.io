---
title: "SaveableRootClassAttribute"
description: "标记一个类为可持久化存档根容器的 Attribute；构造参数 SaveId 是该类型在全局存档定义上下文中的稳定身份编号，保存系统据此把整个对象图序列化进 .sav。"
---
# SaveableRootClassAttribute

**命名空间：** TaleWorlds.SaveSystem
**模块：** TaleWorlds.SaveSystem
**类型：** `public class SaveableRootClassAttribute : Attribute`
**源文件：** bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveableRootClassAttribute.cs

## 概述

`SaveableRootClassAttribute` 派生自 `System.Attribute`，并被限定只能贴在 **类（Class）** 上（`[AttributeUsage(AttributeTargets.Class)]`）。它唯一的职责是向 TaleWorlds 保存系统声明：被标记的类是一个“存档根容器（root class）”，应当作为对象图的顶层节点参与序列化；构造参数里的 `SaveId`（`int`）则是这个类型在全局定义上下文中的唯一身份。对 modder 来说，只要想让自己的一个完整数据类（而不是某个零散字段）随存档整体读写，就必须先给它贴 `[SaveableRootClass]`，否则类内的任何 `[SaveableField]` / `[SaveableProperty]` 都不会被保存系统收集。

## 心智模型

把这套 Attribute 理解为“编译期写死的存档契约”，而不是运行时对象。三层角色各司其职：

1. **`[SaveableRootClass(SaveId)]`** 声明“这是一个可持久化的根类型”，`SaveId` 是全局唯一的类型编号；
2. **`[SaveableField(id)]` / `[SaveableProperty(id)]`** 在该类型内部逐成员声明“哪些字段/属性要持久化”，`id` 是类型**内部**稳定的成员编号；
3. 真正的读写发生在运行时：`SaveManager` 在 `InitializeGlobalDefinitionContext` 阶段用反射扫描所有带这些 Attribute 的类型，交给 `SaveableTypeDefiner` / `TypeDefinition` 构建定义上下文，存档时由 `ArchiveSerializer` 按编号写出、读档时按编号回填。

要点：`SaveId` 与每个 `LocalSaveId` 都是**已发布的 schema**，一旦随版本发出就必须跨版本保持稳定，否则旧存档会因编号对不上而坏档；Attribute 本身是静态元数据，在定义阶段被读取一次，并不会随每个实例被序列化进存档。

## 何时使用 / 何时不要使用

适合：

- 你有一个完整的自定义数据类（例如某个战役行为的全局状态聚合）需要整体随存档存活，于是贴 `[SaveableRootClass]` 并给每个要保存的成员加 `[SaveableField]` / `[SaveableProperty]`。
- 原生实例：`TaleWorlds.Core.Game` 类上即标注了 `[SaveableRootClass(5000)]`——整局游戏状态正是以 `Game` 为根被保存下来的。

不适合 / 危险：

- **不要给已发布的原生根类型新增或改动 `SaveId`。** `Game` 的 `5000` 是约定好的，重号或与现有类型冲突会让定义上下文报错。
- **不要只贴 `[SaveableField]` 却忘了 `[SaveableRootClass]`。** 该类不会进入定义上下文，成员会被静默丢弃。
- **不要依赖成员声明顺序。** 永远用显式 `id` 指定编号，不要假设“第几个字段就是几号”。
- 成员类型若不可序列化（没有对应 `SaveableTypeDefiner` 或 BasicType 支持），保存时会抛异常，而不是跳过。

## 依赖图

上游由保存系统内核驱动，下游被大量原生与 mod 类型引用：

- [SaveManager](../SaveManager) —— 负责初始化定义上下文并执行 `Save` / `Load`，是读取这些 Attribute 的引擎。
- [SaveableTypeDefiner](../SaveableTypeDefiner) —— 注册根类型、分配类型编号，与 `SaveId` 对应。
- [ArchiveSerializer](../ArchiveSerializer) —— 按成员编号把对象图写成存档字节流。
- [TypeDefinition](../TypeDefinition) —— 在定义上下文中持有根类的字段/属性成员表。

## 风险

- **改动已发布类型的 `SaveId`** → 定义上下文无法识别旧档中的类型，读档失败（坏档）。
- **`SaveId` 全局重复** → `CheckSaveableTypes` / 定义阶段报“重复类型”错误，保存直接失败。
- **根类缺少 `[SaveableRootClass]` 却标记了成员 Attribute** → 成员被静默忽略，读档后拿到默认值，属于隐蔽数据丢失。
- **成员引用了未注册的可序列化类型** → 收集或加载阶段抛异常。
- Attribute 是静态元数据：它只在定义阶段被读取一次，**不要**指望在运行时改 `SaveId` 来“修复”兼容问题。

## 成员说明

### 构造参数 `saveId`（`int`）

构造时传入的全局类型编号，存入 `SaveId` 属性。它决定这个类型在存档定义上下文里的身份，必须跨版本稳定且全局唯一。原生 `Game` 使用 `5000`。

### 属性 `SaveId`（`int`，可读写）

保存的类型编号。`[SaveableRootClass(5000)]` 中的 `5000` 即落到这里。产品代码通常只读取它；运行期改写没有意义，因为定义上下文在 `InitializeGlobalDefinitionContext` 时就已经按初始值建好。

## 示例

```csharp
using TaleWorlds.SaveSystem;
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

// 1) 声明一个随存档存活的 mod 根类型。SaveId 必须是 mod 自有的全局唯一整数。
[SaveableRootClass(910001)]
public class MyModCampaignState
{
    [SaveableField(1)] public int RaidCount { get; set; }
    [SaveableField(2)] public string FactionTag { get; set; }
}

// 2) 在 SubModule / CampaignBehavior 中，以 Game 为根触发一次保存：
var metaData = new MetaData();
var output = SaveManager.Save(Game.Current, metaData, saveName, driver);

// 3) 读档后从对象系统取回一个已注册的 MBObjectBase 派生实例
var item = MBObjectManager.Instance.GetObject<MyModItem>("my_mod_item");
```

> 注意：`SaveId = 910001` 仅为示例区间；实际 mod 应使用 TaleWorlds 官方分配或自己规划、永不复用的编号，避免与官方/其他 mod 的 `SaveId` 冲突。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveableFieldAttribute](../SaveableFieldAttribute) · [SaveablePropertyAttribute](../SaveablePropertyAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [原生字段/属性用法：TextObject](../../localization/TextObject) · [存档对象基类：MBObjectBase](../../campaign-ext/MBObjectBase)
