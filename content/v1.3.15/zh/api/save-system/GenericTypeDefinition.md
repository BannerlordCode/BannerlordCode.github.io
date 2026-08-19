---
title: "GenericTypeDefinition"
description: "开放泛型类型的存档定义占位：以 GenericSaveId 标识一个形如 List<>/Dictionary<,> 的“类型模板”，等待 ConstructGeneric*Definition 用具体类型参数实例化后才成为可用的容器/类定义。"
---
# GenericTypeDefinition

**命名空间：** TaleWorlds.SaveSystem.Definition
**模块：** TaleWorlds.SaveSystem
**类型：** `internal class GenericTypeDefinition : TypeDefinition`
**基类：** [TypeDefinition](../TypeDefinition) → [TypeDefinitionBase](../TypeDefinitionBase)
**源文件：** `TaleWorlds.SaveSystem/Definition/GenericTypeDefinition.cs`

## 概述

`GenericTypeDefinition` 是“开放泛型类型（open generic type）”在定义上下文中的占位节点，例如 `List<>`、`Dictionary<,>`、`Tuple<,>` 这类还**没有填入具体类型参数**的模板。它继承自 [TypeDefinition](../TypeDefinition)（进而 [TypeDefinitionBase](../TypeDefinitionBase)），构造时只接收 `Type`（必须是开放泛型）与 `GenericSaveId saveId`，并把 `objectResolver` 设为 `null`——因为此时还没有具体元素类型可供解析。真正可用的类型定义要等 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `ConstructGenericClassDefinition` / `ConstructGenericStructDefinition` 用具体类型参数（如 `List<int>`、`Tuple<string,int>`）把它“实例化”成一个完整的类/结构定义。它解决的是“泛型类型的 schema 不能写死，必须按使用到的具体组合分别登记”的问题。

## 心智模型

- **是什么：** 开放泛型类型的“模板定义”，记录一个泛型模板 + 它的 `GenericSaveId`，等待被具体类型参数实例化。
- **何时用：** 处在保存系统的**类型定义层（泛型子层）**。当你使用的容器/泛型类型（如 `List<Hero>`、`Dictionary<string,int>`）需要被存档，而引擎要为每一个具体组合生成定义时，先经过它这个模板。
- **何时不要用：** 不要把它当成“已经可用的具体类型定义”——它只是模板；也不要直接 `new GenericTypeDefinition` 而不走 `ConstructGeneric*Definition`，那样不会填入元素类型，序列化时无法落地。
- **谁创建/持有：** 由 [SaveableTypeDefiner](../SaveableTypeDefiner) 在登记泛型模板时构造，持有在 [DefinitionContext](../DefinitionContext) 的泛型定义表中；之后由同一定义器按需要用具体参数实例化为常规定义。
- **处在哪一层：** 定义层。它与 [ContainerDefinition](../ContainerDefinition) 协作——容器（`List<T>` 等）最终会同时有泛型模板与具体容器定义。

## 何时使用 / 何时不要使用

适合（理解层面）：

- 理解“为什么 `List<int>` 和 `List<Hero>` 是两套独立定义”——它们都源自 `List<>` 这个 `GenericTypeDefinition` 模板，但被分别实例化。
- 排查泛型容器字段为何有时报“找不到类型定义”——可能是该具体组合未被 `ConstructGeneric*Definition` 登记。

不适合 / 危险：

- **不要假设泛型模板本身可序列化。** 只有实例化后的具体类型（如 `List<int>`）才有完整定义；直接用开放泛型当字段类型会失败。
- **不要跨版本改 `GenericSaveId`。** 它与具体实例化的类型编号体系联动，改动会破坏兼容。
- **不要自行为泛型手工 `new`。** 始终用 definer 的 `ConstructGeneric*Definition` 走实例化流程。

## 依赖图

- [TypeDefinition](../TypeDefinition) —— 直接父类，提供类/结构定义的成员与解析器框架。
- [TypeDefinitionBase](../TypeDefinitionBase) —— 更上层基类，提供 `SaveId`/`Type`/`TypeLevel`。
- [GenericSaveId](../GenericSaveId) —— 泛型模板的编号类型；`saveId` 即它。
- [SaveableTypeDefiner](../SaveableTypeDefiner) —— `ConstructGenericClassDefinition` / `ConstructGenericStructDefinition` 把模板实例化为具体定义。
- [ContainerDefinition](../ContainerDefinition) —— 泛型容器最终落地的具体定义形态之一。
- [DefinitionContext](../DefinitionContext) —— 持有泛型模板与实例化后的定义。

## 风险

- **具体泛型组合未登记** → 字段类型是 `List<MyType>` 但该组合没被实例化，序列化查不到定义，`CheckSaveableTypes` 报警或保存/加载抛异常。
- **`GenericSaveId` 与具体实例编号冲突/改动** → 模板与实例化定义对不上，旧档识别失败（坏档）。
- **泛型参数类型自身不可序列化** → 即便模板存在，元素类型缺定义仍会失败；需保证每个类型参数都可存档。
- **滥用开放泛型作字段** → 开放泛型无法落地，必须用具名具体组合。

## 成员说明

### 构造参数 `type` / `saveId`

`GenericTypeDefinition(Type type, GenericSaveId saveId)`：要求 `type` 为开放泛型（如 `typeof(List<>)`），`saveId` 为 `GenericSaveId`；`objectResolver` 设为 `null`（元素类型尚未确定）。构造即把 `Type`/`SaveId` 交给 [TypeDefinitionBase](../TypeDefinitionBase) 体系。

### 与实例化流程的关系

它自身不含成员表绑定；真正的成员/元素类型绑定发生在 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `ConstructGeneric*Definition` 用具体类型参数创建完整 [TypeDefinition](../TypeDefinition) / [ContainerDefinition](../ContainerDefinition) 时。

## 示例

引擎为泛型容器登记模板并实例化具体组合；模组侧只触发保存，背后这些泛型定义支撑 `List<T>` 等字段的读写：

```csharp
// 引擎内部（SaveableBasicTypeDefiner）实例化具体泛型容器定义（示意）：
//   ConstructGenericClassDefinition(typeof(Tuple<string, int>));
//   ConstructContainerDefinition(typeof(List<int>));

// 模组侧：以 Game 为根保存，字段里的 List<Hero> / Dictionary<string,int> 经泛型定义落地：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

注意：泛型字段的每个“具体类型组合”都必须被实例化登记；仅存在 `List<>` 模板不足以序列化 `List<Hero>`。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[TypeDefinition](../TypeDefinition) · [TypeDefinitionBase](../TypeDefinitionBase) · [GenericSaveId](../GenericSaveId) · [ContainerDefinition](../ContainerDefinition) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
