---
title: "CustomField"
description: "用于注册的“自定义字段”记录：以名字 + short 编号的形式，让 SaveableTypeDefiner 能把没有贴 [SaveableField] 的私有字段（如 Tuple 的 m_Item1）也纳入存档，绕过反射标注的局限。"
---
# CustomField

**命名空间：** TaleWorlds.SaveSystem.Definition
**模块：** TaleWorlds.SaveSystem
**类型：** `public class CustomField`
**源文件：** `TaleWorlds.SaveSystem/Definition/CustomField.cs`

## 概述

`CustomField` 是一条“自定义字段登记项”，把目标私有字段的 **名字（`Name`）** 与 **存档编号（`SaveId`，`short`）** 绑在一起。它的存在是为了弥补 `[SaveableField]` 的不足：像 `Tuple<,>`、`KeyValuePair<,>`、`Nullable<>` 这类来自 BCL/Framework 的类型，你没法给它们的内部私有字段贴 Attribute，但存档又必须能读出 `m_Item1`、`value` 等字段。`SaveableTypeDefiner` 的 `AddClassDefinitionWithCustomFields` / `AddStructDefinitionWithCustomFields` 就接收一组 `CustomField`，在定义阶段按名字从类型里取出对应字段并赋予稳定编号。它是引擎侧“白名单式”登记私有字段的机制，mod 一般只在使用泛型/内建类型时间接受益。

## 心智模型

- **是什么：** 一条“字段名 → 存档编号”的映射记录，让无 Attribute 的私有字段也能被存档系统识别。
- **何时用：** 它处在保存系统的**类型定义层**。当你通过 `AddClassDefinitionWithCustomFields` / `AddStructDefinitionWithCustomFields` 登记一个内部字段不可标注的类型（典型如 `Tuple`、`KeyValuePair`、`Nullable`、你自己的私有嵌套结构）时使用。
- **何时不要用：** 对你**自己能改源码**的类，优先用 `[SaveableField(id)]`——它更清晰、编译期可见、不易拼错字段名；不要为了省事给可标注类改用 `CustomField`，因为字段名重构后 `CustomField` 不会编译报错，只会在运行期找不到字段。
- **谁创建/持有：** 由 [SaveableTypeDefiner](../SaveableTypeDefiner) 在定义阶段构造并登记，交给对应类/结构定义的自定义字段表；运行期只读。
- **处在哪一层：** 定义层。序列化阶段 [ArchiveSerializer](../ArchiveSerializer) 按 `CustomField` 登记的编号与名字取出私有字段值。

## 何时使用 / 何时不要使用

适合：

- 扩展存档支持一个 BCL 泛型类型（如 `Tuple<string,int>`），其字段无法标注，`SaveableBasicTypeDefiner` 便用 `CustomField("m_Item1", 1)` 登记。
- 你自己写一个不希望公开为属性的私有字段，又必须随存档存活，且类本身不便贴 `[SaveableField]` 时。

不适合 / 危险：

- **不要对可标注类滥用 `CustomField`。** 字段名是字符串，拼写错误或重构后静默失效，远不如 `[SaveableField]` 安全。
- **不要让 `SaveId` 与同类型的 `[SaveableField]` 编号冲突。** 自定义字段与标注字段共用同一编号空间，`id` 必须类型内唯一。
- **不要跨版本改字段名或编号。** 旧档按旧名字/编号回填，字段错位即坏档。

## 依赖图

- [SaveableTypeDefiner](../SaveableTypeDefiner) —— `AddClassDefinitionWithCustomFields` / `AddStructDefinitionWithCustomFields` 消费 `CustomField` 列表。
- [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) —— 实例化大量 `CustomField`（`Tuple`/`KeyValuePair`/`Nullable` 等）登记内建泛型类型。
- [TypeDefinitionBase](../TypeDefinitionBase) —— 持有自定义字段表的类/结构定义节点。
- [ArchiveSerializer](../ArchiveSerializer) —— 按 `CustomField` 的编号与名字读取私有字段值。
- [MemberTypeId](../MemberTypeId) —— 字段编号语义层面的对应类型（`short` 在此作为成员编号）。

## 风险

- **字段名拼错** → 定义/加载时按名字找不到字段，静默失败或抛异常；因为是字符串，编译期不报错，最易踩坑。
- **`SaveId` 冲突** → 与标注字段或其它自定义字段抢编号，序列化互相覆盖（隐蔽坏档）。
- **跨版本改名/改号** → 旧档字段错位；`CustomField` 的 `Name`/`SaveId` 均须跨版本稳定。
- **字段可访问性不足** → 私有字段需反射可访问；若类型做了访问限制，登记可能失败。

## 成员说明

### 属性 `Name`（`string`，只读）

目标字段的名字（如 `"m_Item1"`、`"value"`）。定义阶段用它从 `Type` 中按名取出 `FieldInfo`。必须与类型的真实字段名完全一致。

### 属性 `SaveId`（`short`，只读）

该自定义字段在所属类型内部的稳定编号，与 `[SaveableField(id)]` 共用编号空间。跨版本必须稳定且类型内唯一。

### 构造参数 `name` / `saveId`

`CustomField(string name, short saveId)` 保存两个值。构造即完成登记项的准备，真正的字段绑定由 `Add*WithCustomFields` 在定义阶段执行。

## 示例

引擎用 `CustomField` 登记 BCL 泛型类型的私有字段；模组若想让自定义不可标注类型也能存档，可照此在 definer 里登记：

```csharp
// 引擎内部（SaveableBasicTypeDefiner）登记 Tuple 的内部字段：
//   AddClassDefinitionWithCustomFields(
//       typeof(Tuple<,>), 100,
//       new Tuple<string, short>[] { new("m_Item1", 1), new("m_Item2", 2) }, null);

// 模组侧：以 Game 为根保存，包含 Tuple/KeyValuePair 的字段经 CustomField 登记后被正确读写：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

注意：对你自己能改源码的类，优先用 `[SaveableField]`；`CustomField` 仅用于无法标注的内部字段，且字段名须与真实字段完全一致。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) · [TypeDefinitionBase](../TypeDefinitionBase) · [MemberTypeId](../MemberTypeId) · [SaveManager](../SaveManager)
