---
title: "LoadData"
description: "加载流程的根信封：持有一份已读档的 MetaData 与 GameData，作为 LoadContext 重建对象图、LoadCallbackInitializator 派发回调时的输入载体。"
---

# LoadData

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class LoadData`
**基类/Base：** `System.Object`
**源文件路径/Source：** `TaleWorlds.SaveSystem/LoadData.cs`

## 一句话职责

在 [LoadContext](../LoadContext) 重建对象图之前，把「这份存档的元数据」与「反序列化后的游戏数据归档」打包成一个信封，供驱动层、加载上下文与加载回调统一引用。

## 心智模型

`LoadData` 是加载链路最外层的信封（envelope），由 `ISaveDriver` 的 `Load(saveName)` 在磁盘读取完成后构造，携带 `MetaData`（应用版本、时间戳、模组清单等）和 `GameData`（已解包的字节归档，内含每个对象/容器的 `ObjectData` 段）。它不参与「对象如何被重建」的细节——那是 [LoadContext](../LoadContext)、[ObjectLoadData](../ObjectLoadData)、[ContainerLoadData](../ContainerLoadData) 的职责；它只是一个贯穿始终的只读上下文，被交给 `LoadContext.Load(loadData, …)` 触发对象图重建，并被 `LoadCallbackInitializator` 用来把 `MetaData` 注入带 `[LoadCallback]` 标记的类型。理解它的关键：它存活于整个加载过程，是 `SaveManager.Load` 内部从驱动层到加载层的唯一桥；它与 `ObjectLoadData` 等**没有继承关系**（并非它们的基类），而是把它们「喂给」加载层的数据包。模组既不应、也不能构造它（驱动返回的实例由引擎持有），真正扩展加载行为的是 `[LoadCallback]`/`[LoadInitializationCallback]` 与 [SaveableTypeDefiner](../SaveableTypeDefiner)。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「加载时为什么拿不到元数据」「`[LoadCallback]` 收到的 `MetaData` 从哪来」「`GameData` 与对象图的关系」，或编写需要感知存档版本/来源的自定义逻辑时。

**不要使用：**

- 不要在模组运行时 `new LoadData(metaData, gameData)`——它由 `FileDriver.Load` / `InMemDriver.Load` 在读取归档后构造，且 `GameData` 的内部 `ObjectData` 必须由 [LoadContext](../LoadContext) 才能解释。
- 不要把它当「对象图」来读——它只装元数据与归档字节，具体对象在 [ObjectLoadData](../ObjectLoadData) / [ContainerLoadData](../ContainerLoadData) 里。
- 不要与保存侧对称类比——没有对应的 `SaveData` 类；`MetaData`/`GameData` 的「写」发生在 [SaveManager](../SaveManager) 的保存路径，加载侧只读。

## 依赖图

- 构造来源：[SaveManager](../SaveManager) 的 `Load` 内部经 `ISaveDriver.Load(saveName)` 得到 `LoadData`（见 `FileDriver`/`InMemDriver`）。
- 下游消费：[LoadContext](../LoadContext) 的 `Load(loadData, …)` 用它驱动对象图重建，并把它传给 `LoadCallbackInitializator`。
- 数据归属：[MetaData](../MetaData) 与 [GameData](../GameData) 是它仅有的两个字段。
- 对象重建枢纽：[ObjectLoadData](../ObjectLoadData) / [ContainerLoadData](../ContainerLoadData) 在 `LoadContext` 内部消费这份归档。
- 全局视角见 [存档系统架构](../../../architecture/save-system)。

## 风险段

- **驱动层未读到归档。** `driver.Load` 失败会返回 `null` 或构造不完整，下游访问 `loadData.MetaData`/`GameData` 直接 `NullReferenceException`。
- **版本/模组不匹配。** `SaveManager.Load` 用 `loadData.MetaData.GetApplicationVersion()` 设置 `OperatingVersion`；若存档由不同版本写入，回调或 resolver 可能拿到预期外的 `MetaData`。
- **它是只读信封。** `MetaData`/`GameData` 的 setter 为 private，运行时修改无意义，也不会回写磁盘。

## 成员说明

### 构造与身份

- `LoadData(MetaData metaData, GameData gameData)`：唯一构造函数，仅由驱动层在读取归档后调用。同时初始化 `MetaData` 与 `GameData` 两个只读属性。
- `MetaData MetaData { get; private set; }`：存档元数据。`SaveManager.Load` 用它取应用版本；带 `[LoadCallback]` 的类型也通过 `LoadCallbackInitializator` 拿到同一份 `MetaData`。
- `GameData GameData { get; private set; }`：反序列化后的游戏数据归档。`LoadContext.CreateLoadData` 用它 `ObjectData[i]` 还原单个对象/容器的文件夹结构。

## 最小真实示例

`LoadData` 由驱动在加载起点构造，是 `SaveManager.Load` 从磁盘到加载层的桥梁。带 `[LoadCallback]` 的类型随后会经 `LoadCallbackInitializator` 收到它的 `MetaData`：

```csharp
// 存档加载的起点：SaveManager.Load 通过驱动得到根 LoadData 信封（元数据 + 游戏数据归档）
LoadResult result = SaveManager.Load(saveName, driver);
if (result.Successful)
{
    MetaData meta = result.MetaData;                 // 等价于 loadData.MetaData，回调阶段会用到
    object root = result.RootObject;                 // 由 LoadContext 重建出的根对象
}
```

注意：模组不应自己构造 `LoadData`；要扩展加载行为，正确做法是给类型标注 `[LoadCallback]` / `[LoadInitializationCallback]`，或在 [SaveableTypeDefiner](../SaveableTypeDefiner) 里登记类型与 resolver。

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[LoadContext](../LoadContext) · [LoadResult](../LoadResult) · [MetaData](../MetaData)
- 相关：[ObjectLoadData](../ObjectLoadData) · [ContainerLoadData](../ContainerLoadData) · [GameData](../GameData) · [SaveManager](../SaveManager) · [SaveableTypeDefiner](../SaveableTypeDefiner)
