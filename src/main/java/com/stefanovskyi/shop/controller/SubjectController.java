package com.stefanovskyi.shop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/subject")
public class SubjectController {
    @RequestMapping("/")
    @ResponseBody
    private String getAllSubjects() {
        return "Test all subjects";
    }
}
