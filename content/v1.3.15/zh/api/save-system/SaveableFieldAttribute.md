---
title: "SaveableFieldAttribute"
description: "标记类的实例字段为可持久化存档成员的 Attribute；LocalSaveId 是该字段在所属类型内部的稳定编号（schema 身份），保存系统据此在 Save/Load 时收集与回填字段。"
---
# SaveableFieldAttribute

**命名空间：** TaleWorlds.SaveSystem
**模块：** TaleWorlds.SaveSystem
**类型：** `public class SaveableFieldAttribute : Attribute`
**源文件：** bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveableFieldAttribute.cs

## 概述

`SaveableFieldAttribute` 派生自 `System.Attribute`，且被 `[AttributeUsage(AttributeTargets.Field)]` 限定只能贴在 **字段（Field）** 上。它告诉保存系统：“这个实例字段是存档成员，并使用 `LocalSaveId` 作为它在所属类型内部的本地编号”。它不会单独创建类型定义、不会注册 Behavior，也不会让不可序列化的字段变得可序列化——字段能否真正被保存，仍取决于其所属类是否进入定义上下文、字段类型是否可序列化。

## 心智模型

把 `LocalSaveId` 当成**类型成员的 schema 编号**，而不是数据库自增 ID。字段上的 Attribute 在定义阶段被 `SaveManager` 反射读取，再由 `SaveableTypeDefiner` / `TypeDefinition.CollectFields()` 把包含该字段的类放入定义上下文；之后 `SaveManager` 才能收集、写出并恢复成员。字段编号必须在所属声明类层级的**字段表**内唯一并跨版本稳定；`TypeDefinition` 对字段和属性分别收集、分别读写，二者不共享重复检查。字段的 `MemberTypeId` 由声明类层级加上 `LocalSaveId` 构成——字段名、声明顺序、私有/公共可见性都不参与匹配，因此绝不能把它们当成兼容机制。

## 何时使用 / 何时不要使用

适合：状态是类的实现细节、需要随对象图保存、且不需要通过公共属性暴露；例如计数器、缓存外的持久状态、对已定义 `MBObjectBase` 的引用。原生例子：`TaleWorlds.Localization.TextObject` 在 `public string Value;` 上标注了 `[SaveableField(1)]`。

不适合：

- Behavior 的私有状态应优先用 `CampaignBehaviorBase.SyncData(IDataStore)` 登记，参见 [IDataStore](../../campaign-ext/IDataStore)。
- 纯运行时缓存、线程句柄、UI 控件、场景实体句柄不应保存。
- 不能把 Attribute 当成类型注册；包含字段的类仍需由 definer 注册为 `SaveableRootClass` 或经结构/容器定义纳入。
- 属性成员应使用 [SaveablePropertyAttribute](../SaveablePropertyAttribute)，`SaveableField` 无法贴在 Property 上。

## 依赖图

- 上游：[SaveableTypeDefiner](../SaveableTypeDefiner) 负责将声明字段的类加入定义表。
- 执行：[SaveManager](../SaveManager) 初始化定义上下文并执行保存/加载。
- 序列化：[ArchiveSerializer](../ArchiveSerializer) 按 `LocalSaveId` 写出/回填字段。
- 成员表：[TypeDefinition](../TypeDefinition) 持有字段集合并构建 `MemberTypeId`。
- 对比：[SaveablePropertyAttribute](../SaveablePropertyAttribute) 标记属性；[IDataStore](../../campaign-ext/IDataStore) 处理 Behavior 键值同步。

## 风险

- **字段表内重复编号会混淆成员。** 同一声明类层级的两个字段使用相同 `LocalSaveId` 时，`CollectFields()` 会记录定义错误；属性由独立的属性表收集，不能据此声称字段/属性共享唯一性。
- **发布后不要换号。** 把字段从 `1` 改成 `3` 等同于改变存档 schema；没有兼容 resolver 时旧档无法按原成员找到数据。
- **不要原地改变字段类型。** `int` 改为 `List<int>`、对象改为不兼容类型，都可能在收集或加载阶段失败。新增版本化成员并保留旧数据转换路径更安全。
- **缺少 definer 不是无害遗漏。** 类型不在 `DefinitionContext` 中时，`SaveManager.Save` 可能因定义错误返回失败，而不是悄悄保存字段。
- **字段值必须可进入对象图。** 把临时引擎对象、第三方句柄或循环无法解析的对象放进字段，会让保存收集/加载失败。
- **不要把 `IDataStore` 和 Attribute 混用。** `IDataStore` 以字符串 key 分桶；`SaveableField` 以类型和 `LocalSaveId` 定义成员，两者的兼容规则不同。
- **读档时机。** `SaveManager.Load` 先建立定义上下文；`LoadContext` 创建对象、解析引用、填充字段/属性，最后才运行初始化和 late 初始化回调。不要在构造函数或过早事件中假设字段已经恢复；依赖其他对象的修复应放到加载回调或 Behavior 的 `OnGameLoaded`。

## 成员说明

### 构造参数 `localSaveId`（`short`）

构造时传入的、在所属类型内部唯一且跨版本稳定的字段编号，存入 `LocalSaveId` 属性。注意它是 `short` 类型（范围 −32768…32767），因此同一类型内可用编号有限，规划时要留好扩展区间。

### 属性 `LocalSaveId`（`short`，可读写）

保存的字段编号。`[SaveableField(1)]` 中的 `1` 即落到这里。产品代码应把它视为已经发布的 schema 编号，不要在运行中改写。`TypeDefinition.CollectFields()` 以声明类型 class level 加上这个 ID 构成 `MemberTypeId`；字段名和声明顺序不参与匹配。

## 示例

```csharp
using TaleWorlds.SaveSystem;
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

// 原生风格：在 struct 上用 SaveableField 标注成员（取自 AllianceCampaignBehavior）
internal struct Alliance
{
    [SaveableField(0)] public readonly Kingdom Kingdom1;
    [SaveableField(1)] public readonly Kingdom Kingdom2;
    [SaveableField(2)] public CampaignTime EndTime;
}

// 以 Game 为根触发保存时，上述结构随其所属根类一起被 SaveManager 收集写出
var output = SaveManager.Save(Game.Current, metaData, saveName, driver);

// 读档后通过 Campaign 取回对应的行为实例
var behavior = Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>();
```

这个例子展示三层不同契约：Attribute 标记字段，definer 给所属类型分配类型定义（`AddStructDefinition` / `AddClassDefinition`），Behavior 的 `IDataStore` 保存根对象。只写第一层，字段不会自动进入可读写的完整存档图。

## 跨版本提示

1.3.15 与 1.4.5 的 Attribute 构造函数及 `LocalSaveId` 类型一致。跨版本 mod 应固定编号、固定字段类型，并在删改成员前设计兼容加载；不要依赖反编译文件中的字段顺序。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveableRootClassAttribute](../SaveableRootClassAttribute) · [SaveablePropertyAttribute](../SaveablePropertyAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [FieldDefinition](../FieldDefinition) · [MemberTypeId](../MemberTypeId) · [原生用法：TextObject](../../localization/TextObject)
