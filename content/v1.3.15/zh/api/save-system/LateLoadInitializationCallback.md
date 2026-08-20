---
title: "LateLoadInitializationCallback"
description: "标记“晚加载初始化”方法的特性：在所有对象加载完成后才执行的二次装配钩子。"
---

# LateLoadInitializationCallback

> **一句话职责：** 贴在方法上的特性，告诉加载系统“等全部对象都重建好、交叉引用打通后，再调用我来做最终装配”。

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `class LateLoadInitializationCallback : Attribute`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/LateLoadInitializationCallback.cs`

## 概述
加载一个存档分两步：先把每个对象实例化和填字段（`LoadInitializationCallback`），再把所有对象之间的引用连起来。有些装配逻辑必须等“万事俱备”才能跑——比如重新计算缓存、订阅事件、绑定到管理器。`LateLoadInitializationCallback` 就是第二批钩子：它在 `LoadCallbackInitializator.AfterInitializeObjects` 阶段被调用，确保所有对象都已就位。

## 心智模型
把它想成“开学典礼后的班会”：所有人（对象）都报到完毕、座位（引用）都排好，才轮到班委（标记的方法）上台做最终安排。它和 `LoadInitializationCallback` 是“早/晚”两班岗——早班在引用还没完全连通时跑，晚班在所有引用打通后跑。加载系统通过反射读取类型定义里的 `LateInitializationCallbacks` 列表，逐个 `Invoke`。modder 只需在需要的方法上贴特性即可，无需手动注册。

## 何时用 / 何时不要用
当你的初始化依赖其他对象（尤其是跨对象引用、容器内容或管理器单例），并且必须在加载全部完成后才安全时，用 `LateLoadInitializationCallback`。如果只是填自己的字段、不依赖外部完整状态，用更早的 `LoadInitializationCallback` 即可；若逻辑与加载无关（运行期初始化），就放在正常的构造函数/游戏启动流程里，而不要塞进加载钩子，避免每次读档都重复执行。

## 依赖图
- 上游：[LoadCallbackInitializator](../LoadCallbackInitializator)、[LoadInitializationCallback](../LoadInitializationCallback)
- 下游：[SaveManager](../SaveManager)、[GameData](../GameData)
- 相关类型/阶段：[TypeDefinition](../TypeDefinition)、[LoadError](../LoadError)

## 风险段
- 方法签名必须受支持：加载系统只调用三种签名——无参、仅 `MetaData`、或 `MetaData` + `ObjectLoadData`。其它参数个数会被忽略，导致钩子静默不执行。
- 执行顺序不确定：同一批晚加载钩子之间不保证先后，不要在它们之间假定依赖关系。
- 抛异常会中断加载：钩子里抛出的异常会沿加载流程上抛，可能让整次读档失败并转化为 `LoadError`。

## 成员说明
- 该特性本身无任何成员（空 `Attribute`），仅作为标记。`AttributeUsage(AttributeTargets.Method)` 限制它只能贴在方法上。是否生效完全取决于加载系统对方法签名的识别与 `Invoke`。

## 示例
```csharp
public class MyCampaignBehavior
{
    [LateLoadInitializationCallback]
    private void OnLateLoad(MetaData metaData) => RebuildCache();
}
ISaveDriver driver = new InMemDriver();
LoadResult result = SaveManager.Load("mySlot", driver);
bool loaded = result.Success;
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[LoadInitializationCallback](../LoadInitializationCallback)、[LoadCallbackInitializator](../LoadCallbackInitializator)
- 架构：[存档系统架构](../../../architecture/save-system)
