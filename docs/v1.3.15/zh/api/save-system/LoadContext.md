<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LoadContext`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadContext

**命名空间:** TaleWorlds.SaveSystem.Load  
**模块:** TaleWorlds.SaveSystem  
**类型:** public class

存档系统的**读取侧上下文**。`SaveManager.Load` 内部创建一个 `LoadContext`，由它从存档数据反序列化出头信息、对象与容器，重建完整对象图。

## 概述

`LoadContext` 持有 `DefinitionContext`（类型定义表）与 `ISaveDriver`（文件 I/O）。读取分三步：

1. **读头信息**：通过 `ArchiveDeserializer` 从 `loadData.GameData.Header` 解析出对象/容器/字符串的数量与头数据。
2. **创建对象**：遍历 `ObjectHeaderLoadData`，按定义创建空对象（ID 为 0 者即根对象）。
3. **填充对象**：逐个读取字段值并填入对象（支持延迟初始化 `loadAsLateInitialize`）。

## 主要属性

| 名称 | 类型 | 描述 |
|------|------|------|
| `DefinitionContext` | DefinitionContext | 类型/字段定义上下文 |
| `Driver` | ISaveDriver | 底层文件 I/O 驱动 |

## 主要方法

```csharp
public LoadContext(DefinitionContext definitionContext, ISaveDriver driver);

// 执行完整加载流程；loadAsLateInitialize 为 true 时延迟回调
public bool Load(LoadData loadData, bool loadAsLateInitialize);
```

## 使用示例

```csharp
var loadResult = SaveManager.Load("MySave", fileDriver);
if (loadResult.Success)
{
    var game = loadResult.RootObject;  // 根对象，由 LoadContext 重建
}
```

::: tip 给 mod 开发者
与 `SaveContext` 一样，`LoadContext` 由 `SaveManager` 内部管理，mod 通常不直接实例化。理解它的存在有助于排查存档兼容性问题（如版本迁移时的字段缺失）。
:::

## 参见

- [SaveManager](./SaveManager.md)
- [SaveContext](./SaveContext.md)
- [SaveAttributes](./SaveAttributes.md)
