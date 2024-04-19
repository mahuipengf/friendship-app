#!/bin/bash

# 使用 xterm 或其他支持的终端模拟器，替换为您的系统中可用的终端程序
term=xterm

# 启动第一个服务
$term -e "bash -c 'cd friendShip-server && node index.js'"

# 启动第二个服务（可能需要延迟以确保第一个终端已经完全打开）
sleep 1
$term -e "bash -c 'cd project && yarn dev'"