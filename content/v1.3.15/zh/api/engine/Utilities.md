---
title: "Utilities"
description: "Utilities 是 TaleWorlds.Engine 的静态工具集，聚合帧率与 GPU 显存诊断、主线程任务队列、烘焙命令、编辑器场景操作与并行计算辅助。"
---
# Utilities

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class Utilities`
**Base:** （无 — 静态工具类）
**Source:** `TaleWorlds.Engine/Utilities.cs`

## 概述

`Utilities` 是一个纯静态类，把引擎里零散的诊断、调试、烘焙与编辑器操作集中到一个门面下。它本身不持有状态，几乎所有方法都转发给原生 `EngineApplicationInterface.IUtil`，并按用途可分十来类：主线程任务队列、帧率/渲染诊断、GPU 与 CPU 显存统计、命令行、场景烘焙、编辑器场景选择、性能报告、并行计算等。mod 在运行时最常用的是诊断查询与跨线程任务投递，烘焙/编辑器类方法则多在开发工具或自定义烘焙流程里调用。

## 心智模型

把 `Utilities` 想成“引擎的自助服务台”——你不需要实例，直接 `Utilities.Xxx()` 调用。它最值得 mod 关注的是两类能力：其一，**主线程任务队列**（`ConstructMainThreadJob` + `RunJobs`），让你在后台线程/异步回调里把必须在主线程执行的代码（改窗口标题、操作场景）打包投递，再让引擎主循环消费；其二，**运行时诊断**（`GetFps`、`GetGPUMemoryMB`、`GetCurrentCpuMemoryUsageMB`），做调试 HUD 或内存监控时直接读取。烘焙（`DoFullBakeSingleLevelAutomated`、`CompileAllShaders`）和编辑器场景操作（`GetSelectedEntities`、`DeleteEntitiesInEditorScene`）则只在编辑器或自动化构建场景有意义，运行时任务里调用基本无意义。不要把它当成“游戏逻辑 API”——它不提供角色/任务/存档相关能力，那些在 [GameEntity](../GameEntity/) 与更高层模块里；`Utilities` 只碰引擎底层与工具链。

## 关键成员

### 主线程任务队列（跨线程）
| 成员 | 作用 |
| --- | --- |
| `ConstructMainThreadJob(Delegate, params object[])` | 把一个委托及参数压入主线程任务队列（可在任意线程调用） |
| `RunJobs()` | 在主线程上依次取出并执行队列中的任务；引擎主循环负责调用 |
| `WaitJobs()` | 忙等直到任务队列清空（自旋，不要在主线程调用以免死锁） |

### 帧率与渲染诊断
| 成员 | 作用 |
| --- | --- |
| `GetFps()` / `GetMainFps()` / `GetRendererFps()` | 分别取总帧率、主线程帧率、渲染线程帧率 |
| `SetRenderMode(EngineRenderDisplayMode)` | 切换调试渲染模式（法线/深度/Overdraw 等） |
| `SetForceDrawEntityID(bool)` | 强制绘制实体 ID，用于调试拾取 |

### GPU / 显存诊断
| 成员 | 作用 |
| --- | --- |
| `GetGPUMemoryMB()` / `GetCurrentEstimatedGPUMemoryCostMB()` | 取显卡总显存与当前估算占用（MB） |
| `GetGPUMemoryStats(ref ...)` / `GetDetailedGPUMemoryData(ref ...)` | 分类取渲染目标/深度/缓冲等显存明细 |
| `RegisterGPUAllocationGroup(string)` / `GetGpuMemoryOfAllocationGroup(string)` | 注册并按分组查询显存分配，给 mod 资源归类计量 |
| `DumpGPUMemoryStatistics(string)` | 把显存统计dump到文件，供崩溃分析 |

### CPU / 内存与回收
| 成员 | 作用 |
| --- | --- |
| `GetCurrentCpuMemoryUsageMB()` / `GetApplicationMemoryStatistics()` | 取托管与原生内存统计 |
| `FlushManagedObjectsMemory()` | 强制 `GC` 回收托管对象，缓解内存峰值 |
| `ClearOldResourcesAndObjects()` | 让原生层清理陈旧资源与对象 |

### 命令行
| 成员 | 作用 |
| --- | --- |
| `CommandLineArgumentExists(string)` | 判断是否传入了某启动参数 |
| `GetFullCommandLineString()` | 取完整命令行字符串 |
| `ExecuteCommandLineCommand(string)` / `AddCommandLineFunction(string)` | 执行/注册控制台命令 |

### 烘焙与着色器（编辑器/构建）
| 成员 | 作用 |
| --- | --- |
| `DoFullBakeSingleLevelAutomated(module, scene)` / `DoLightOnlyBakeSingleLevelAutomated(...)` | 对单个场景触发完整/仅光照的自动烘焙 |
| `CompileAllShaders(string)` / `CheckShaderCompilation()` / `DidAutomatedGIBakeFinished()` | 编译全部着色器、查询编译状态与 GI 烘焙是否完成 |

### 编辑器场景操作
| 成员 | 作用 |
| --- | --- |
| `GetSelectedEntities(ref List<GameEntity>)` | 取编辑器当前选中的实体集合 |
| `SelectEntities(...)` / `CreateSelectionInEditor(...)` / `GetEntitiesOfSelectionSet(...)` | 选中/建选择集/按名取选择集实体 |
| `DeleteEntitiesInEditorScene(List<GameEntity>)` | 在编辑器场景里删除指定实体 |

### 并行计算
| 成员 | 作用 |
| --- | --- |
| `ParallelFor(...)` / `ParallelForWithDt(...)` | 把循环分发给工作线程并行执行 |
| `ParallelForWithoutRenderThread(...)` | 同上但保证不触碰渲染线程资源 |
| `GetMainThreadId()` / `GetCurrentThreadId()` / `IsAsyncPhysicsThread()` | 线程身份查询，配合任务队列判断当前上下文 |

## 真实示例

```csharp
// 在后台线程里把任务塞进主线程队列，再由引擎在主线程 RunJobs 消费
Utilities.ConstructMainThreadJob(new Action(() => { Utilities.SetWindowTitle("mod loaded"); }));

// 读取帧率与 GPU 显存占用，用于调试 HUD
float fps = Utilities.GetFps();
int gpuMB = Utilities.GetGPUMemoryMB();
int cpuMB = (int)Utilities.GetCurrentCpuMemoryUsageMB();

// 在编辑器里对选中实体做批量删除
List<GameEntity> selected = new List<GameEntity>();
Utilities.GetSelectedEntities(ref selected);
Utilities.DeleteEntitiesInEditorScene(selected);
```

## 风险与崩溃边界

- **`ConstructMainThreadJob` 必须在主线程 `RunJobs` 配对。** 工作线程只负责投递，真正的执行发生在主线程；若引擎主循环从不调用 `RunJobs`，任务会永远排队不执行。
- **`WaitJobs()` 是自旋忙等。** 在投递线程里调用它会死循环占用 CPU，且若调用方正是唯一能跑 `RunJobs` 的线程会死锁；只在确实需同步且不在主线程时使用。
- **`ParallelFor` 可能触碰渲染线程资源。** 并行体里访问 [Texture](../Texture/)、[Light](../Light/) 等渲染对象要用 `ParallelForWithoutRenderThread`，否则与渲染线程竞争导致数据撕裂。
- **烘焙/编辑器方法运行时无效。** `DoFullBakeSingleLevelAutomated`、`GetSelectedEntities` 等依赖编辑器或烘焙管线，普通任务/战役运行时调用要么无效果，要么因缺少编辑器上下文报错。
- **`GetSelectedEntities` 用 `ref` 追加而非清空。** 传入已有元素的 `List<GameEntity>` 会被追加，重复调用前需手动 `Clear`，否则累计旧引用。

## 依赖关系

- 上游：几乎所有方法经 [EngineApplicationInterface](../EngineApplicationInterface/) 的 `IUtil` 原生接口转发。
- 下游：操作 [GameEntity](../GameEntity/)（编辑器选择/删除）、[Scene](../Scene/)（烘焙、性能报告）与 [Texture](../Texture/)（显存统计）。
- 相关：烘焙流程与 [Shader](../Shader/) 编译状态联动。
- 架构参考：[crash-boundaries](../../../architecture/crash-boundaries/) 涉及主线程任务队列与渲染线程边界。

- 父级：[engine API 索引](../)
- 同级：[EngineApplicationInterface](../EngineApplicationInterface/) · [GameEntity](../GameEntity/) · [Scene](../Scene/) · [Texture](../Texture/) · [Shader](../Shader/) · [Light](../Light/)
