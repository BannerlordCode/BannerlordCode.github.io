---
title: "IEnumResolver"
description: "枚举兼容解析器契约：加载旧档时，把存档里记下的枚举原始表示（字符串）翻译为当前版本对应的枚举表示，专治“枚举成员改名/重排”导致的跨版本读档失败。"
---

# IEnumResolver

**命名空间：** `TaleWorlds.SaveSystem.Resolvers`  
**模块：** `TaleWorlds.SaveSystem`  
**类型：** `public interface IEnumResolver`  
**基类：** —  
**源文件：** `TaleWorlds.SaveSystem/Resolvers/IEnumResolver.cs`

## 概述

`IEnumResolver` 是保存系统提供的**枚举跨版本兼容钩子**，只有一个方法：`string ResolveObject(string originalObject)`。它的职责是在**加载旧档**时，把存档里记录的枚举“原始表示”（通常是枚举成员名或序列化字符串）翻译为当前游戏版本里**对应的枚举表示**。当官方或 mod 在某次更新中重命名、合并或重排了某个枚举的成员（例如把 `OldName` 改为 `NewName`），`IEnumResolver` 就是让旧档中的枚举值仍能正确还原的“翻译层”。它与 [IConflictResolver](../IConflictResolver) 同源，只是粒度更细——专门服务枚举（对应 [SavedMemberType](../SavedMemberType) 里的 `Enum` 类别）。

## 心智模型

- **是什么：** 枚举值的“旧名 → 新名”翻译器，加载旧档时按需调用。
- **何时用：** 你维护的 mod 改动了某个已发布枚举的成员名/顺序，又希望旧档里存的老值还能读出来时，应提供 `IEnumResolver` 做名称映射。
- **何时不要用：** 不要把它当运行时枚举转换的通用工具——它只在加载旧档、且遇到需要翻译的枚举值时被咨询；新存档不会触发。日常枚举只要成员名稳定、编号稳定就无需 resolver。也不要在 `ResolveObject` 里做重活或抛异常，它会被频繁调用。若枚举只是“新增成员”而旧名不变，则不需要 resolver。
- **谁创建/持有：** 由 definer / 存档迁移逻辑注册，在加载流程中由序列化层对枚举成员咨询；mod 通常经由自己的 [SaveableTypeDefiner](../SaveableTypeDefiner) 或官方迁移表挂接。
- **处在哪一层：** 处于“加载兼容层”——在类型定义（[DefinitionContext](../DefinitionContext)）之下、[ArchiveDeserializer](../ArchiveDeserializer) 还原枚举值之上。

## 何时使用 / 何时不要使用

**使用（实践层面）：** 某次更新把枚举成员 `Baby` 改名为 `Infant`，旧档仍记 `Baby` → 提供 resolver，在 `ResolveObject("Baby")` 时返回 `"Infant"`。

**不要使用：**

- 不要指望 resolver 修复“完全没登记 definer”的枚举类型：它只翻译已存在的枚举值表示。
- 不要返回当前枚举里不存在的字符串：翻译结果必须能被现行枚举解析，否则还原失败。

## 依赖图

- 枚举分类：[SavedMemberType](../SavedMemberType) 的 `Enum` 类别是 `IEnumResolver` 被咨询的触发点。
- 加载流程：[SaveManager](../SaveManager) 在加载旧档时由序列化层咨询 resolver；[ArchiveDeserializer](../ArchiveDeserializer) 据返回结果还原枚举值。
- 类型定义：[DefinitionContext](../DefinitionContext) / [SaveableTypeDefiner](../SaveableTypeDefiner) 提供现行枚举，是翻译目标。
- 同类钩子：[IConflictResolver](../IConflictResolver) 处理类型/成员级迁移，二者常配合使用。

## 风险

- **返回不存在的枚举名** → 翻译后无法解析为合法枚举值，加载抛异常或落到默认/错误值。
- **漏翻译** → 某些旧名没映射，旧档对应枚举值还原失败或取默认，属隐蔽数据错误。
- **跨版本语义变化未同步** → 即使名称映射正确，新旧枚举成员含义若不同，迁移后逻辑仍可能错。

## 成员说明

### `string ResolveObject(string originalObject)`

入参 `originalObject` 是存档里记下的枚举原始表示（成员名/序列化字符串），返回当前版本对应的枚举表示。若无需翻译，通常应原样返回入参，避免误伤其它值。

## 示例

模组侧在加载旧档时由引擎自动咨询 resolver；而**保存**仍是统一入口——确保现行枚举已被定义，旧值才能被正确翻译：

```csharp
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

一个枚举 resolver 的典型骨架（加载旧档时由引擎调用，本身不含 `SaveManager` 调用）：

```csharp
public class MyModEnumResolver : IEnumResolver
{
    public string ResolveObject(string originalObject)
    {
        if (originalObject == "Baby") return "Infant"; // 旧名 → 新名
        return originalObject;                          // 其余原样返回
    }
}
```

> 注意：resolver 只在加载旧档遇到需翻译的枚举值时生效；返回结果必须能被现行枚举解析，否则还原失败。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IConflictResolver](../IConflictResolver) · [SavedMemberType](../SavedMemberType) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [DefinitionContext](../DefinitionContext) · [ArchiveDeserializer](../ArchiveDeserializer) · [SaveManager](../SaveManager)
